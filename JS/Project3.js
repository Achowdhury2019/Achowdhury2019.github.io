let randomNumber = Math.trunc(Math.random() * 100) + 1;
const hint = document.querySelector('.hint');
let score = 0;
let highScore = 0;
let preGuess = [];

document.querySelector('.check').addEventListener('click', function () {
    const input = Number(document.querySelector('.userInput').value);
    console.log(randomNumber);

    if (input === '') {
        hint.textContent = '⛔Not a number!';
    } else if (input < 1) {
        hint.textContent = 'Please enter a number between 1-100!';
    } else if (input > 100) {
        hint.textContent = 'Out of range! Please enter a number less than 100!';
    } else if (input > randomNumber) {
        hint.textContent = "📈Too high! Try again!";
        document.querySelector('.userInput').value = '';
        document.querySelector('.displayNum').textContent = `${input}`;
        score++;
        document.querySelector('.score').innerHTML = `${10 - score}  `;
        preGuess.push(input);
        document.querySelector('.numEn').innerHTML = `${preGuess.join(', ')}`;
    } else if (input < randomNumber) {
        hint.textContent = "📉Too low! Try again!";
        document.querySelector('.userInput').value = '';
        document.querySelector('.displayNum').textContent = `${input}`;
        score++;
        document.querySelector('.score').innerHTML = `${10 - score}  `;
        preGuess.push(input);
        document.querySelector('.numEn').innerHTML = `${preGuess.join(', ')}`;
    } else if (input === randomNumber) {
        document.querySelector('.displayNum').innerHTML = `${randomNumber}`;
        hint.textContent = "🎉You guessed correctly!";
        document.querySelector('body').style.background = 'linear-gradient(to right, #82E0AA , #A9CCE3)';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').innerHTML = `${10 - highScore}`;
        }
        document.querySelector('.check').disabled = true;
        document.querySelector('.userInput').disabled = true;
    } else {
        hint.textContent = 'Invalid input!';
    }

    if (score === 10) {
        document.querySelector('.displayNum').innerHTML = `${randomNumber}`;
        hint.innerHTML = '💥Game Over! Good luck next time!';
        document.querySelector('body').style.background = 'linear-gradient(to right, #EC7063 , #F7DC6F)';
    }
});


document.querySelector('.playAgain').addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random() * 100) + 1;
    score = 0;
    preGuess = [];
    document.querySelector('.numEn').innerHTML = ``;
    document.querySelector('.score').innerHTML = `${10 - score}  `;
    document.querySelector('.userInput').value = '';
    document.querySelector('.displayNum').textContent = '?';
    document.querySelector('.hint').textContent = '🤔Start guessing...';
    document.querySelector('.score').textContent = `10`;
    document.querySelector('body').style.background = 'linear-gradient(to top right, #ec77b6, #e9f1a2)';
    document.querySelector('.check').disabled = false;
    document.querySelector('.userInput').disabled = false;
});

