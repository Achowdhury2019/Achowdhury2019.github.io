let randomNumber = Math.trunc(Math.random() * 100) + 1;
const submit = document.querySelector('.btn2');
const userInput = document.querySelector('.guessBox');
const output = document.querySelector('.guessShow');
const startOver = document.querySelector('.btn1');
const hint = document.querySelector('.hint');
const remaining = document.querySelector('.score');
const preNum = document.querySelector('.numEn');
let preGuess = [];
let score = 10;
let highscore = 0;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function () {
        const input = Number(userInput.value);
        validateInput(input);
    });
}



function validateInput() {
    if (isNaN(input)) {
        hint.innerHTML = "Please enter a valid number!";
    } else if (input < 1) {
        hint.innerHTML = "Please enter a number greater than 1!";
    } else if (input > 100) {
        hint.innerHTML = 'Please enter a number less than 100!';
    } else {
        preGuess.push(input);
        if (score === 10) {
            showGuess(input);
            showMsg(`Game over! The number was ${randomNumber}`);
            endGame();
        } else {
            showGuess(input);
            guessHint(input);
        }
    }
}

function guessHint(input) {
    if (input === randomNumber) {
        hint.textContent= "You guessed correctly!";
        endGame();
    } else if (input > randomNumber) {
        hint.textContent = "Too high! Try again!";
    } else if (input < randomNumber) {
        hint.textContent = "Too low! Try again!";
    }
}

function showGuess(input) {
    userInput.value = '';
    output.innerHTML += `${input}  `;
    score++;
    remaining.innerHTML = `${10 - score}  `;
}

function showMsg(message) {
    hint.innerHTML = `<h1>${message}</h1>`
}

function endGame() {
    userInput.value = '';
    output.textContent = '?';
    playGame = false;
    newGame();
}

function newGame() {
    startOver.addEventListener('click', function () {
        randomNumber = Math.trunc(Math.random() * 100) + 1;
        preGuess = [];
        score = 10;
        userInput.innerHTML = '';
        hint.innerHTML = '';
        remaining.innerHTML = `${10 - score}`;
        playGame = true;
    });
}