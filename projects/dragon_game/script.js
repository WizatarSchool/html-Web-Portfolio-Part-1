// Initialize variables
var input;
var randNum;
var message;

run();
function run() {
  // Initial message
  alert("You are in a land full of dragons. In front of you, you see two caves. In one cave, the dragon is friendly and will share his treasure with you. The other dragon is greedy and hungry, and will eat you on sight.");
  input = parseInt(prompt("Which cave will you go into? (1 or 2)"));
  if(!checkIfValidNum(input)) {
    alert("Unsure of which cave to go in, you simply just left. The end...");
  } else {
    randNum = Math.ceil(Math.random() * 2);
    alert("You approach the cave...");
    alert("It is dark and spooky...");
    randNum == input ? message = "Gives you a treasure." : message = "Gobbles you down in one bite!";
    alert(`A large dragon jumps out in front of you! He opens his jaws and...\n${message}\n\nDo you want to play again? (Press OK)`);
    run();
  }
}

// Check if string inputted is an integer equal to 1 or 2, if so, return true, if not, return false
function checkIfValidNum(message) {
  let num = parseInt(message);
  if (input == 1 || input == 2) {
    return true;
  }
  return false;
}
