// import functions and grab DOM elements
import { countAsAYes } from './utils.js';

const labQuizButton = document.getElementById('quizButton');
const userInputField = document.getElementById('userInput');
console.log(userInputField);
// initialize state

// set event listeners to update state and DOM
labQuizButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');
    
    const confirmation = confirm('Do you want to continue?');
    if (!confirmation) return; 

    const firstName = prompt('What is your first name?');
    // console.log(firstName);
    
    const lastName = prompt('What is your last name?');
    // console.log(lastName);
    
    const firstAnswer = prompt('Was Cierra born in Colorado Springs?');
    let correctAnswers = 0;

    if (!countAsAYes(firstAnswer)) correctAnswers++;
    // if (firstAnswer.charAt(0).toUpperCase() !== 'Y') {
    //     console.log('Perfect!');
    // } else {
    //     console.log('Not quite!');
    // }

    const secondAnswer = prompt('Was lacrosse one of the sports she played?');
    if (countAsAYes(secondAnswer)) correctAnswers++;
    // if (secondAnswer.charAt(0).toUpperCase() === 'Y') {
    //     console.log('Perfect!');
    // } else {
    //     console.log('Not quite!');
    
    const thirdAnswer = prompt('Did Cierra receive a minor in pre-law?');
    if (countAsAYes(thirdAnswer)) correctAnswers++;

    // if (thirdAnswer.charAt(0).toUpperCase() === 'Y') {
    //     console.log('Perfect!');
    // } else {
    //     console.log('Not quite!');
    // }

    const fourthAnswer = prompt('Is Cierra an extrovert?');
    if (!countAsAYes(fourthAnswer)) correctAnswers++;
    // if (fourthAnswer.charAt(0).toUpperCase() !== 'Y') {
    //     console.log('Perfect!');
    // } else {
    //     console.log('Not quite!');
    // }

    const resultString = `Hey ${firstName} ${lastName}! You got ${correctAnswers} correct!  Awesome Job!`;
    console.log(resultString);

    userInputField.textContent = resultString;
});
