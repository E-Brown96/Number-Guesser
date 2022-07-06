let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuessInput, computerGuessDisplay, targetNumberDisplay) => {
  if (Math.abs(humanGuessInput - targetNumberDisplay) < Math.abs(computerGuessDisplay - targetNumberDisplay)){
    return true;
  }
  else if (Math.abs(humanGuessInput - targetNumberDisplay) > Math.abs(computerGuessDisplay - targetNumberDisplay)){
    return false;
  }
  else {
    return true;
  };
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore = humanScore + 1;
  }
  else {
    computerScore = computerScore + 1;
  };
}

const advanceRound = () => {
  currentRoundNumber = currentRoundNumber + 1;
}
