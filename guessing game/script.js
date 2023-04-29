/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '😀Correct number!';
document.querySelector('.score').textContent = '10';
document.querySelector('.number').textContent = '13';

document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);*/

//first set the random number with the math random function and then set the default value of score and highscore
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message){
    document.querySelector('.message').textContent = message;
}
// so, what happens if we click the check button. (we use this function below to set that)
document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value); // set the guess input and store it with .value function
    if (!guess) {
        //document.querySelector('.message').textContent = '💀No Number';
        displayMessage('💀No Number');
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber; // display the secret number in the number class
        //document.querySelector('.message').textContent = 'Correct Number. You win💋';
        displayMessage('Correct Number. You win💋');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess < secretNumber ? '🗿Too Low, Try Again' : '🚀Too High, Try Again';
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = 'Game Over Biatch💩🤡';
            displayMessage('Game Over Biatch💩🤡');
            document.querySelector('.score').textContent = '0';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
})
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start Guessing.....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});