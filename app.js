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

    prompt('What is your first name?');
    
    prompt('What is your last name?');
    
    prompt('Was Cierra born in Colorado Springs?');

    prompt('Was lacrosse one of the sports she played?');

    prompt('Did Cierra receive a minor in pre-law?');

    prompt('Is Cierra an extrovert?');

});
