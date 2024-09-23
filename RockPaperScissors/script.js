const choices = ['Rock', 'Paper', 'Scissors'];
const PrintResult = document.getElementById('_result');

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (computerChoice === playerChoice) {
        result = "It is a Tie!";
    } else {
        switch (playerChoice) {
            case 'Rock':
                result = (computerChoice === 'Scissors') ? "You win!" : "You lose!";
                break;
            case 'Paper':
                result = (computerChoice === 'Rock') ? "You win!" : "You lose!";
                break;
            case 'Scissors':
                result = (computerChoice === 'Paper') ? "You win!" : "You lose!";
                break;
            default:
                result = "Invalid choice!";
                break;
        }
    }
    PrintResult.innerHTML = `You Choose: ${playerChoice} Computer chose: ${computerChoice}. <br> ${result}`;
}
