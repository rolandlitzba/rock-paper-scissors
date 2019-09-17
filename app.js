const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  const smallUserWord = '(user)'.fontsize(3).sub();
  const smallComputerWord = '(comp)'.fontsize(3).sub();
  const userChoiceDiv = document.getElementById(user);
  userScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${user}${smallUserWord} beats ${computer}${smallComputerWord}. You win!`;
  document.getElementById(user).classList.add('green-glow');
  setTimeout(() => userChoiceDiv.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
  const smallUserWord = '(user)'.fontsize(3).sub();
  const smallComputerWord = '(comp)'.fontsize(3).sub();
  const userChoiceDiv = document.getElementById(user);
  computerScore++;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${user}${smallUserWord} loses to ${computer}${smallComputerWord}. You lost!`;
  document.getElementById(user).classList.add('red-glow');
  setTimeout(() => userChoiceDiv.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
  const smallUserWord = '(user)'.fontsize(3).sub();
  const smallComputerWord = '(comp)'.fontsize(3).sub();
  const userChoiceDiv = document.getElementById(user);
  resultDiv.innerHTML = `${user}${smallUserWord} equals ${computer}${smallComputerWord}. Its a draw!`;
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(() => userChoiceDiv.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'scissorsrock':
    case 'rockpaper':
    case 'paperscissors':
      lose(userChoice, computerChoice);
      break;
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rockDiv.addEventListener('click', () => game('rock'));
  paperDiv.addEventListener('click', () => game('paper'));
  scissorsDiv.addEventListener('click', () => game('scissors'));
}

main();
