//global constants
const cluePauseTime = 333; //how long to pause in-between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of clue sequence

//global variables
var clueHoldTime = 1300; //how long to hold each clue's light/sound
var pattern = [0,0,0,0,0,0,0,0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var countdown = 2;
var timerInterval;
var audio;

//function to generate random numbers
function random(num) {
  return Math.floor(1+Math.random()*num)
}

function startGame() {
  //initialize game variables
  clearInterval(timerInterval);
  clueHoldTime = 1300;
  progress = 0;
  countdown = 2;
  gamePlaying = true;
  pattern = [random(5), random(5), random(5), random(5), random(5), random(5), random(5), random(5)]
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //hide the captions and show the timer!
  document.getElementById("caption1").classList.add("hide");
  document.getElementById("caption2").classList.add("hide");
  document.getElementById("caption3").classList.add("hide");
  document.getElementById("caption4").classList.add("hide");
  document.getElementById("caption5").classList.add("hide");
  document.getElementById("timer").classList.remove("hidden");
  
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  document.getElementById("caption1").classList.remove("hide");
  document.getElementById("caption2").classList.remove("hide");
  document.getElementById("caption3").classList.remove("hide");
  document.getElementById("caption4").classList.remove("hide");
  document.getElementById("caption5").classList.remove("hide");
  document.getElementById("timer").classList.add("hidden");

  clearInterval(timerInterval);
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
  document.getElementById("bird"+btn).classList.add("unhidden");
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
  document.getElementById("bird"+btn).classList.remove("unhidden");
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playBird(btn);
    setTimeout(clearButton,clueHoldTime,btn);
    setTimeout(function(){
      pauseBird(btn);
    },clueHoldTime,btn)
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<=progress; i++) { //for each clue that is revealed so far
    clearInterval(timerInterval);
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
    countdown += 3;
  }
  timerInterval = setInterval(timer, 1000);
}

function loseGame() {
  stopGame();
  alert("Game over. You lost.");
}

function winGame() {
  stopGame();
  alert("Yay! You successfully befriended the birds!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
      clueHoldTime -= 20;
    }
  } else {
    loseGame();
  }
}

const audio1 = "https://cdn.glitch.global/d4e87508-ab88-4a78-ba19-ceb5face8637/Black Crows?v=1650050516577";
const audio2 = "https://cdn.glitch.global/d4e87508-ab88-4a78-ba19-ceb5face8637/Brown-headed Cowbird?v=1650156774529";
const audio3 = "https://cdn.glitch.global/d4e87508-ab88-4a78-ba19-ceb5face8637/American Robin?v=1650058655634";
const audio4 = "https://cdn.glitch.global/d4e87508-ab88-4a78-ba19-ceb5face8637/Mourning Dove?v=1650088942152";
const audio5 = "https://cdn.glitch.global/d4e87508-ab88-4a78-ba19-ceb5face8637/House Finch?v=1650052377527";
var audios = [audio1, audio2, audio3, audio4, audio5];

function playBird(num) {
  if (tonePlaying) {
    audio.pause();
    tonePlaying = false;
  }
  audio = new Audio(audios[num-1]);
  audio.loop = true;
  audio.play();
  tonePlaying = true;
}

function pauseBird(num) {
  audio.pause();
  tonePlaying = false;
}

function timer() {
  countdown = countdown - 1;
  if (countdown <= -1) {
    clearInterval(timerInterval);
    loseGameFly();
    countdown = 2;
  }
  document.getElementById("timer").innerHTML =
    "You have " + countdown + " seconds left before the birds fly away!";
}

function loseGameFly() {
  stopGame();
  alert("The birds flew away! :(");
}

//the below code is used for the synth tones
/*
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 512.3,
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
*/