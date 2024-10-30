// Generate random numbers between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

// Create the image file paths
let firstDice = `images/dice${randomNumber1}.png`;
let secondDice = `images/dice${randomNumber2}.png`;

// Update the image sources
document.querySelector(".img1").setAttribute("src", firstDice);
document.querySelector(".img2").setAttribute("src", secondDice);

let winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  (winner.innerHTML = "Player 1 wins!");
} else if (randomNumber1 < randomNumber2) {
  (winner.innerHTML = "Player 2 wins!");
} else {
  (winner.innerHTML = "Draw!");
}