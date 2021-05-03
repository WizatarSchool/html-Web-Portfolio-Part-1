// Initiate variables
var randomNumberGenerated;
var coinSideString;
var guess;
var guessCheck;

// Alert intro message
alert("Welcome to the heads or tails game! In this game, I, the computer, will flip a coin, and you have to guess what the coin landed on.\nInput whether it is \"heads\" or \"tails\".");

randomNumberGenerated = Math.ceil(Math.random() * 2); // Generate random number
randomNumberGenerated == 1 ? coinSideString = "heads" : coinSideString = "tails"; // Set the coin side to heads if the generated number is 1, otherwise set the coin side to tails.
guess = prompt("What do you guess? heads or tails?").toLowerCase(); // Ask user whether the coin landed on heads or tails.
guessCheck = "\nYou guessed it was " + guess + ".\nThe coin landed on " + coinSideString + ".";

guess === coinSideString ? alert("Congratulations! You correctly guessed which side the coin landed on!" + guessCheck) : alert("Sorry, you did not guess the correct side." + guessCheck) // If the guess is the same side the coin landed on, congratulate the player. Otherwise, tell them they guessed the wrong side.