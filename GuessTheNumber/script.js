function processInput(event) {
  event.preventDefault();
  var start = parseInt(document.getElementById("Start").value);
  var end = parseInt(document.getElementById("end").value);

  if (end <= start) {
    document.getElementById("DisplayResult").innerText =
      "End value cannot be less than or equal to start value";
  } else {
    document.getElementById("DisplayResult").innerText = "";
    startGuessing(start, end);
  }
}

function startGuessing(start, end) {
  const elements = document.getElementsByClassName("Range");
  const heading = document.getElementById("DisplayHeading");

  elements[0].classList.add("inputGuess");
  elements[1].classList.add("inputGuess");
  elements[2].classList.remove("inputGuess");
  heading.innerText = `Start guessing from ${start} to ${end}`;
}
