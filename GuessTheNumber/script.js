let randomNumber = null,
  crr = 3;

function processInput(event)
 {
  event.preventDefault();
  const start = parseInt(document.getElementById("Start").value);
  const end = parseInt(document.getElementById("end").value);

  if (end <= start)
     {
    document.getElementById("DisplayResult").innerText =
      "End value cannot be less than or equal to start value";
    return;
  }

  if(randomNumber === null)
    {
      randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    }  
  console.log(`Random number is: ${randomNumber}`);
  document.getElementById("DisplayResult").innerText = "";
  startGuessing(start, end);
}

function startGuessing(start, end) {
  const elements = document.getElementsByClassName("Range");
  const submits = document.querySelector(".submit");
  const heading = document.getElementById("DisplayHeading");

 
  elements[0].classList.add("inputGuess");
  elements[1].classList.add("inputGuess");
  elements[2].classList.remove("inputGuess");


  heading.innerText = `Start guessing from ${start} to ${end}`;
  submits.classList.add("inputGuess");

  document.getElementById("DisplayResult").innerText =
    "Enter your guess and press enter. "
}

document.getElementById("guess").addEventListener("keydown", (event) => 
  {
  if (event.key === "Enter") 
    {
    const userGuess = parseInt(document.getElementById("guess").value);

    if (crr > 0) 
      {
      crr --;
      validateGuess(userGuess);
    } 
    else {
      alert(`You failed. The correct number was ${randomNumber}.`);
      resetGame(); 
    }
  }
});

function validateGuess(userGuess) 
{

    console.log(`User Guess: ${userGuess}, Random Number: ${randomNumber}`);

    if (userGuess > randomNumber)
       {
        alert(`Guess a smaller number than ${userGuess}. Remaining guesses: ${crr}`);
    }
     else if (userGuess < randomNumber)
       {
        alert(`Guess a greater number than ${userGuess}. Remaining guesses: ${crr}`);
    } 
    else {
        document.getElementById("guess").value = "";
        document.getElementById("DisplayResult").innerText = "";
        alert(`Congratulations! You guessed the correct number.`);
        resetGame();
    }       
}

function resetGame() {

  location.reload()
}
