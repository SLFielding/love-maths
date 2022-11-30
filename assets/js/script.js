document.addEventListener("DOMContentLoaded", function () {
    let buttons = this.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})


/** The main game loop, called when the script is first loaded and after user's answer has been processed */
function runGame(gameType) {
    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

    if (gameType==="addition"){
        displayAdditionQuestion(num1, num2);
    }
    else {
        alert(`Unknown game type: ${gameType}`);
        throw(`Unknown game type: ${gameType}. Aborting!`);
    }
}

/**
 * Checks user answer against first returned [element] from calculateCorrectAnswer() array
 * 
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value)
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect){
        alert('Hey! You got it right!');
    }
    else
    {
        alert(`Ah damn! The correct answer is ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (numbers) from the Dom and the operator
 * Returns the correct answer as an array
 * contines the game
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = (document.getElementById('operator').innerText);

    if (operator==="+") {
        return[operand1 + operand2, "addition"]
    }
    else {
        alert(`Unused game type operator ${operator} `)
        throw(alert(`Unused game type operator ${operator}. Aborting!`))
    }

}

function incrementScore() {
    let 
}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}
