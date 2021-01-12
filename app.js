import { countAsAYes } from './utils.js';

const labQuizButton = document.getElementById('quizButton');
const userInputField = document.getElementById('userInput');

labQuizButton.addEventListener('click', () => {
    alert('Welcome to my quiz!');
    const confirmation = confirm('Do you want to continue?');
    if (!confirmation) return; 

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
   
    const firstAnswer = prompt('Was Cierra born in Colorado Springs?');
    let correctAnswers = 0;
    if (!countAsAYes(firstAnswer)) correctAnswers++;
    const secondAnswer = prompt('Was lacrosse one of the sports she played?');
    if (countAsAYes(secondAnswer)) correctAnswers++;
    const thirdAnswer = prompt('Did Cierra receive a minor in pre-law?');
    if (countAsAYes(thirdAnswer)) correctAnswers++;
    const fourthAnswer = prompt('Is Cierra an extrovert?');
    if (!countAsAYes(fourthAnswer)) correctAnswers++;

    const resultString = `Hey ${firstName} ${lastName}! You got ${correctAnswers} out of 4 correct!  Awesome Job!`;
    userInputField.textContent = resultString;
});
