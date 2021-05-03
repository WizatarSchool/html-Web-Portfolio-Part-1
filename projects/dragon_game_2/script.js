// Initialize variables
var input;
var message;
var numOfWinningCaves = 2; // Making this number bigger than numOfCaves will just set numOfWinningCaves to numOfCaves.
var numOfCaves = 3;
var winningCaves = new Array();

// Variable debugging
if (numOfWinningCaves > numOfCaves) {
  numOfWinningCaves = numOfCaves;
}

run(); // Run the game for the first time

/**
 * Main "loop" and running code
 */
function run() {
  // Initial message
  alert("You are in a land full of dragons. In front of you, you see two caves. In one cave, the dragon is friendly and will share his treasure with you. The other dragon is greedy and hungry, and will eat you on sight.");

  input = parseInt(prompt(`You have a ${numOfWinningCaves} in ${numOfCaves} chance of winning. Which cave will you go into? (Pick a number between 1 and ${numOfCaves})`)); // Ask for a number
  if(!checkIfValidNum(input)) { // Check if input is not valid
    alert("You decide for longer which cave to go into...");
    run(); // Run again
  } else { // If input is valid
    generateWinningCaves(); // Generate winning caves

    alert("You approach the cave..."); // Message
    alert("It is dark and spooky..."); // Message
    compareCaves(input) ? message = "Gives you a treasure." : message = "Gobbles you down in one bite!"; // Generate message. If generated number equals the input, then reward the player, otherwise kill the player.
    alert(`A large dragon jumps out in front of you! He opens his jaws and...\n${message}\n\nPress OK to continue.`); // Message
    let msg = confirm("Do you want to play again? (Press OK to continue, Cancel to not)"); // Check whether or not the player wants to play again
    if (msg){ // If the player wants to play again
      run(); // then run the code again
    }
  }
}

/**
 * Check if string inputted is an integer equal to a valid number, if so, return true, if not, return false
 */
function checkIfValidNum(message) {
  let num = parseInt(message); // Turn string to int
  if (input >= 1 && input <= numOfCaves) { // If number is in range
    return true; // Then return true
  }
  return false; // Otherwise return false
}

/**
 * Generate good caves function
 */
function generateWinningCaves() {
  for (var i = 0; i < numOfWinningCaves; i++) { // Do this 'numOfWinningCaves' times
    addAvailableCaveNumber(i); // Every time this loops through, add an available number (function below)
  }
}

/**
 * Add an available number (a number that is not already in the winning caves array) to the winning caves array
 */
function addAvailableCaveNumber(index) {
  winningCaves[index] = Math.ceil(Math.random() * numOfCaves); // Generate the number and add it to the array
  for (var i = 0; i < winningCaves.length; i++) { // Loop through the current numbers in the winning caves array
    if (winningCaves[i] == winningCaves[index] && i != index) { // Check if any other slot oter than the current slot has a number equal to the current slot.
      addAvailableCaveNumber(index); // If so, redo the process using the same slot in the array.
    }
  }
}

/**
 * Check to see if the passed number is an element of the winning caves array
*/
function compareCaves(number) {
  for (var i = 0; i < winningCaves.length; i++) { // Loop through all the elements of the winningCaves array
    if (number == winningCaves[i]) { // If the passed number is equal to one of the elements in the array
      return true; // Then return true
    }
  }
  return false; // Otherwise return false
}
