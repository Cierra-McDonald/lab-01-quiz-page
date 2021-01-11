# lab-01-quiz-page

OUTCOMES:
There should be an alert
There should be a prompt
There should be a confirm so the user can opt out
There should be a name prompt AND last name prompt
There should be three question prompts
The user should be able to see their results after taking the quiz

HTML Setup: 
-Some information presented nicely with an image and some list items
    -Why? So the user knows what to do
-Add a button to launch the quiz
    -Why? to lauch the quiz
-A secret, empty results div
    -Why? To inject/display the results to the user 

1.) Get DOM elements
    -button
    -secret div
2.) Add event listeners
    -button 

3.) Respond to user input -- in most apps, the real work happens in the cool zone!
    -launch an alert
    -launch a confirmation
        -if user says no, nothing else happens ('return' nothing to break out of the cool zone)
        -if yes, lauch the series of prompts
    -launch a first name prompt
        -store that output to display later
    launch a last name prompt
        -store that output to display later
    lauch quiz prompts with specific yes/no questions
        -how do we evaluate the answers?
        -what counts as a yes?
            -anything that starts with a (Y)
            -how many times are we going to see if something counts as a yes? 
                -three times
                -instead of copying and pasting, lets write a 'countAsYes' function!
    -make a results string 
    -display that  results string
        -inject stuff into the textContent of our secret div 

        
    

