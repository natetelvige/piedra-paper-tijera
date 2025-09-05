const choices = ["piedra", "papel", "tijera"];
const buttons = document.querySelectorAll("#choices button");
const playerChoiceSpan = document.getElementById("player-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const resultMessage = document.getElementById("result-message");
const resultContainer = document.getElementById("result-container");
const playAgainBtn = document.getElementById("play-again-btn");
const choicesContainer = document.getElementById("choices");

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "Empate! :o";
  if (
    (player === "piedra" && computer === "tijera") ||
    (player === "papel" && computer === "piedra") ||
    (player === "tijeras" && computer === "papel")
  ) return "Ganaste! :>";
  return "Perdiste! -.-";
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();

    playerChoiceSpan.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerChoiceSpan.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    resultMessage.textContent = determineWinner(playerChoice, computerChoice);

    resultContainer.style.display = "block";
    choicesContainer.style.display = "none";
  });
});

playAgainBtn.addEventListener("click", () => {
  choicesContainer.style.display = "block";
  resultContainer.style.display = "none";
});
