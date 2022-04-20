# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Alisa Lu**

Time spent: **14** hours spent in total

Link to project: [https://glitch.com/edit/#!/melodious-charm-jaw](https://glitch.com/edit/#!/melodious-charm-jaw)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added captions for identifying birds that appear when buttons are not pressed

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
Winning the game: [Winning](https://recordit.co/HE8HETqJfW) (video link because the gif is too long)

Losing the game by pressing the wrong button:
![Losing (Wrong button)](http://g.recordit.co/7oInkco7ec.gif)

Losing the game by timing out:
![Losing (Timed out)](http://g.recordit.co/weSTzVbPcL.gif)

Demonstration of button functionality:
![Button functionality + other features](http://g.recordit.co/biQO8i1dq2.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- [CSS fonts](https://www.w3schools.com/Css/css_font.asp)
- [Javascript Math.random()](https://www.w3schools.com/jsref/jsref_random.asp)
- [Centering objects](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/)
- [Images](https://www.w3schools.com/tags/tag_img.asp)
- [Hiding and Unhiding images](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Bird Images](http://celebrateurbanbirds.org/)
- [HTML newline](https://www.delftstack.com/howto/html/html-new-line/)
- [Pausing audio](https://www.w3schools.com/jsref/met_audio_pause.asp)
- [Playing audio for set amount of time](https://stackoverflow.com/questions/64145436/playing-audio-for-a-specific-time-in-javascript)
- [Javascript Timeout](https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/)
- [Crow Sound](https://soundbible.com/1486-Black-Crows-Cawing.html)
- [House Finch Sound](https://soundbible.com/354-House-Finch.html)
- [Brown-headed Cowbird Sound (Manuel Grosselet)](https://xeno-canto.org/species/Molothrus-ater)
- [American Robin Sound (Ted Floyd)](https://xeno-canto.org/species/Turdus-migratorius)
- [Mourning Dove Sound](https://www.freesoundslibrary.com/mourning-dove-sound-effect/)
- [Bird Photos from Celebrate Urban Birds](https://celebrateurbanbirds.org/learn/birds/fs/us/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge that I encountered in creating the submission was implementing the general motif of “birds” while still maintaining the original intent of the light and sound memory game. I had to evaluate several different design decisions while figuring out how to get the program to execute the design as I wanted it. Specifically, the audio of bird calls was difficult to implement and adapt to the format of the memory game. I overcame the challenge by approaching it step by step and asking for second opinions. 

First, I had no idea how to implement sounds from external sources into the website. I resolved this challenge by looking at online forums and references and using the processes that they described. Then, I had to figure out how to implement the bird calls to fit the memory game.

My audio clips for the bird calls are all at varying lengths (from 3 seconds to 1 minute). Originally, I wanted the sounds of the birds to loop and mesh together forming a bird song, but I realized that it would not work well with the repetition of the clue sequence, and the potential repetition of buttons. So, instead of the meshing of calls, I limited the audio to one at a time, pausing the audio when the button was lifted. This was my first change, which came with other challenges too.

This change meant that because the audio was paused, the sounds of each button would be inconsistent (and sometimes quiet, because they would be between the calls of the bird). So, to combat that, I decided to create a new audio each time the button was pressed, which would restart the sound from the beginning rather than resume it from where it left off. This change required me to have a better understanding of how audios worked, and ended up with me creating a global variable for audio that would be redefined each time a button was pressed.

I wasn’t sure if this change was better than the previous version, so I asked for second opinions. My friends felt that the second version reflected better on the memory aspect, as the sounds were consistent. 

In the end, I had a design of the audio that I was satisfied with, and that also contributed to the motif of birds and made my project more unique and personal.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I am curious as to how websites with many different elements, functionalities, and layers (for a company, for example) are designed and organized. How is the code organized for a website with many different subpages (and how does it all come together)? How is it designed to keep users engaged? How do you change the URL of the website, and how do the contents show up on the screen after loading the URL? How do you add design flourishes (like scrolling animations/moving text)? And for large websites, how do you collaborate with other people on developing it? What is communication like?

I am also curious about the security aspect of websites. For the memory game, we collect user input about which buttons they press, but if the website is collecting sensitive user input or information, how do they ensure the privacy and security of the data? On the topic of collecting information, it also makes me wonder about how websites like Google and Facebook collect data about their users, and how the algorithms are designed to adapt to the users (how do they just know when I’m craving a certain type of food?). Which brings up the question, what exactly does it mean when websites are collecting cookies (I see the popups all the time)? 

Now on the train of thought about popups, I wonder, what does Adobe Flash do? And how does (did) it integrate with websites, and how do (did) we accommodate for that in web development? How do websites communicate with other external parties (and what kind of external parties are there)? How did Flash multiplayer games work (and how does Google Docs work, where multiple people interact with the same thing at once)?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I'd organize the project better, separating the script into different files and modules so that it would have high cohesion and low coupling. I would separate the functions as follows: audio, lighting buttons/playing the clue sequence, the timer, starting/stopping/winning/losing the game. This would make the program easier to maintain.

Secondly, I’d change parts of the timer. I would refactor it so that the timer starts when the clue sequence is finished playing. While the sequence is playing, I would change the text in the timer to indicate that the pattern is ongoing. These two changes would signal the end of the sequence more clearly, and would prevent the player from starting their guesses while the sequence is still playing.

Additionally, when you first start the game, for a flash of a second, the timer will indicate that there are two seconds remaining, before changing to the correct number of seconds. I’d want to make it such that you never see this brief timer mishap.

As for additional features, I’d add different difficulty levels based on the different features of the game. For example, I could have a button/slider that changes clueHoldTime, adapting the speed of the clue sequence. I could also have a button/slider that changes the number of buttons that appears on the page, and another that changes the length of the pattern. I could also implement the three lives functionality, and have a slider that changes the number of lives. Having these features would expand the universal usability of the game, extending the user base.

I’d also want to test the project out with multiple different people and see if they have any feedback or features that they’d think would be implemented. Then, I’d evaluate the feedback and adjust my project accordingly.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/9b81e2caeb9f4bd19c095f88e8f01253)


## License

    Copyright Alisa Lu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
