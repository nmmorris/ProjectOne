## Project One: Physical and Mental Character Creator for P5.js
#### by Natalie Morris



### Overview

This program prompts the user with a series of personality quiz questions, asking
them to reflect on who they are, what they value, and how they feel. With each
answer, a new part of their character, a manifestation of their personality, is 
created! 

The character is made up of png files that are drawn on the screen through
various functions after each question is answered. The answers can be clicked like
buttons that use an object class to allow them to be clicked and functional. The 
questions function as moodstates, which can be navigated through backwards and
forwards as the user chooses.


### Technical Details

This program includes the clickable class to make use of button objects, moodstate functions for each stage of the program, and draw functions to create images. The button objects function as navigation to continue to the next moodstate or go back, while the option button objects function as the clickable check mark boxes for the user to select an answer in. Each of these buttons use the onPress function within the class. Each image is stored inside a variable, which is then displayed based on how the user answers the questions, or rather clicks on the option buttons. Then the images are displayed through conditional logic to determine which body part will be built inside the character.

Adobe XD Outline:
https://xd.adobe.com/view/41a73e84-c0c2-4f8b-8e23-be01f2411b04-14f4/?fullscreen