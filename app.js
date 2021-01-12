// import functions and grab DOM elements
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
    console.log(firstName);
    
    const lastName = prompt('What is your last name?');
    console.log(lastName);
    
    const firstAnswer = prompt('Was Cierra born in Colorado Springs?');
    if (firstAnswer.charAt(0).toUpperCase() !== 'Y') {
        console.log('Perfect!');
    } else {
        console.log('Not quite!');
    }

    const secondAnswer = prompt('Was lacrosse one of the sports she played?');
    if (secondAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('Perfect!');
    } else {
        console.log('Not quite!');
    }

    const thirdAnswer = prompt('Did Cierra receive a minor in pre-law?');
    if (thirdAnswer.charAt(0).toUpperCase() === 'Y') {
        console.log('Perfect!');
    } else {
        console.log('Not quite!');
    }

    const fourthAnswer = prompt('Is Cierra an extrovert?');
    if (fourthAnswer.charAt(0).toUpperCase() !== 'Y') {
        console.log('Perfect!');
    } else {
        console.log('Not quite!');
    }

});
