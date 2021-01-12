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
    
});
