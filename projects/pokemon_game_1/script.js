// Initialize variables
var yourPokemon;
var yourPokemonAbilities;
var yourPokemonStats;
var yourPokemonAbilityNames;
var playerPreviousActionDamageMultiplyer;
var enemyPokemon;
var enemyPokemonAbilities;
var enemyPokemonStats;
var enemyPreviousActionDamageMultiplyer;
var playerWon;
var globalDamageMultiplyer;
var turn;
var allApplicablePokemons = ["Pikachu", "Squirtle", "Mewtwo", "Alakazam", "Charmander", "Greninja", "Lucario", "Amoonguss", "Zoroark", "Starmie", "Wailord", "Diglett", "Burmy", "Ditto"];

// Get ability variables
var gotAbility;
var repeatPromptAbility;
var abilityChosen;

// Main loop conditional variables
var running = true;
var gameRunning = true;

// Game loop
while(running) {
  // Prepare game
  let chosenAbility;
  let message;
  let damageMessage;
  turn = 0;

  // Create your pokemon
  yourPokemon = "Not chosen";
  yourPokemonStats = null;
  yourPokemonAbilities = null;
  yourPokemonAbilityNames = null;
  playerPreviousActionDamageMultiplyer = 1;
  enemyPokemon = "Not chosen";
  enemyPokemonStats = null;
  enemyPokemonAbilities = null;
  enemyPreviousActionDamageMultiplyer = 1;  

  // This sets the Pokemon stats in an array. The hp is stored in slot 0, starting energy is stored in slot 1 and their weakness is stored in slot 2.
  var pikachuStats = [60, 90, "magic"];
  var squirtleStats = [50, 115, "fire"];
  var mewtwoStats = [100, 40, "electricity"];
  var alakazamStats = [70, 75, "kinetic"];
  var charmanderStats = [70, 80, "water"];
  var greninjaStats = [125, 20, "electricity"];
  var lucarioStats = [110, 50, "magic"];
  var amoongussStats = [80, 70, "fire"];
  var zoroarkStats = [90, 60, "life"];
  var starmieStats = [80, 80, "life"];
  var wailordStats = [200, 240, "electricity"];
  var diglettStats = [60, 140, "life"];
  var burmyStats = [60, 100, "fire"];
  var dittoStats = [50, 100, "kinetic"];

  // This sets all available moves/abilities the Pokemon can perform. They are all stored within a two-dimensional array. Everything within the main array is one ability. Inside that:
  //    Slot 0: Name of ability     
  //    Slot 1: Minimum amount of damage this ability deals
  //    Slot 2: Maximum amount of damage this Pokemon deals
  //    Slot 3: The energy cost this ability requires
  //    Slot 4: The amount of health your Pokemon regenerates when performing this ability
  //    Slot 5: The damage your next move gets multiplied by
  //    Slot 6: The strength of this ability. If this matches the enemy Pokemon's weakness, the damage dealt is multiplied
  var pikachuAbilityList = [["Punch", 10, 15, 25, 0, 1, "kinetic"],["Shock", 15, 25, 40, 0, 1, "electricity"],["Lightning Strike", 40, 60, 120, 0, 1.5, "electricity"],["Light Strike", 15, 25, 25, 2, 1, ""],["Heal", 0, 0, 0, 5, 1, ""],];
  var squirtleAbilityList = [["Punch", 7, 10, 30, 2, 1, "kinetic"], ["Flood", 15, 25, 60, 0, 1, "water"],["Skull Bash", 20, 30, 30, 0, 1, "kinetic"], ["Hydro Pump", 50, 75, 45, 0, 0, "water"], ["Heal", 0, 0, 0, 6, 1, ""]];
  var mewtwoAbilityList = [["Punch", 15, 20, 20, 0, 1, "kinetic"], ["Fistfight", 30, 40, 60, 0, 1, "kinetic"], ["Psydrive", 50, 75, 45, 0, 0, "magic"], ["Heal", 0, 0, 0, 3, 1, ""]];
  var alakazamAbilityList = [["Punch", 2, 5, 15, 0, 1, "kinetic"], ["Spell", 15, 22, 30, 3, 1, "magic"], ["Fireball", 20, 30, 45, 0, 1, "fire"], ["Curse", 10, 25, 40, 2, 1, "magic"], ["Plan", 0, 0, 0, 0, 2, ""]];
  var charmanderAbilityList = [["Punch", 8, 13, 20, 0, 1, "kinetic"], ["Ember", 4, 8, 8, 0, 1, "fire"], ["Flare", 5, 10, 20, 0, 2, "fire"], ["Reckless Charge", 20, 30, 55, 0, 1.5, "kinetic"], ["Heal", 0, 0, 0, 8, 1.5, ""]];
  var greninjaAbilityList = [["Punch", 3, 5, 5, 0, 1, "kinetic"], ["Steam Slash", 12, 18, 22, 0, 1, "water"], ["Mist Slash", 40, 50, 30, 0, 1, "water"], ["Shadow Stitching", 30, 40, 20, 0, 1, ""], ["Shadow Bullet", 50, 60, 65, 0, 1, ""], ["Shadowy Hunter", 60, 80, 135, 50, 0, ""], ["Rest", 0, 0, 0, 0, 0, ""]];
  var lucarioAbilityList = [["Punch", 15, 25, 20, 0, 1, "kinetic"], ["Vaccum Wave", 20, 40, 25, 0, 0.5, ""], ["Missle Jab", 40, 65, 40, 0, 0.5, "fire"], ["Magnum Kick", 45, 50, 100, 0, 1.5, "kinetic"], ["Mach Cross", 70, 110, 60, 0, 0, "kinetic"], ["Heal", 0, 0, 0, 5, 1, ""]];
  var amoongussAbilityList = [["Punch", 10, 20, 10, 0, 1, "kinetic"], ["Miracle Powder", 15, 30, 20, 0, 1, "life"], ["Rising Lunge", 25, 40, 30, 0, 1, "kinetic"], ["Venoshock", 35, 50, 40, 0, 1, "life"], ["Energy Ball", 50, 70, 100, 0, 1, "electricity"], ["Heal", 0, 0, 0, 15, 1, ""], ["Build Strength", 1, 3, 0, 0, 3, ""]];
  var zoroarkAbilityList = [["Punch", 5, 10, 10, 0, 1, "kinetic"], ["Corner", 15, 20, 15, 0, 1, ""], ["Dark Rush", 25, 35, 35, 0, 1.5, "magic"], ["Foul Play", 40, 55, 40, 0, 1, ""], ["Heal", 0, 0, 0, 8, 1, ""]];
  var starmieAbilityList = [["Spin", 5, 10, 10, 0, 1, "kinetic"], ["Star Freeze", 10, 15, 13, 0, 1, "water"], ["Boomerang", 20, 30, 25, 0, 1, "kinetic"], ["Confuse", 10, 20, 30, 0, 2.5, "magic"], ["Energy Loop", 30, 45, 50, 3, 1, "electricity"], ["Plan", 0, 0, 0, 3, 2, ""]];
  var wailordAbilityList = [["Hit", 10, 15, 25, 0, 1, "kinetic"], ["Heavy Impact", 25, 40, 60, 0, 0, "kinetic"], ["Surf", 30, 45, 70, 0, 0, "water"], ["Hydro Splash", 40, 55, 100, 0, 0, "water"], ["Giant Wave", 100, 140, 275, 0, 0, "water"], ["Dwindling Wave", 130, 180, 320, 0, 0, "water"], ["Nap", 0, 0, 0, 20, 0, ""]];
  var diglettAbilityList = [["Punch", 2, 5, 5, 0, 1, "kinetic"], ["Scratch", 5, 10, 10, 0, 1, "kinetic"], ["Mud Slap", 10, 15, 12, 0, 1, "kinetic"], ["Iron Head", 20, 30, 20, 0, 1, "kinetic"], ["Dig", 0, 0, 0, 0, 1, ""]];
  var burmyAbilityList = [["Punch", 1, 2, 0, 0, 1, "kinetic"], ["Hang Down", 5, 10, 4, 0, 1, "life"], ["Tackle", 5, 10, 5, 0, 1, "kinetic"], ["Solar Ray", 15, 25, 9, 0, 1, "fire"], ["Gust", 40, 55, 30, 0, 1, "life"], ["Planter Pain", 60, 70, 50, 0, 1, "life"], ["Leaf Cutter", 80, 110, 65, 0, 1, "life"], ["Heal", 0, 0, 0, 15, 0.5, ""]];

  // Easter egg "Pokemon"
  var vectorStats = [Number.MAX_VALUE, 0, "none"];
  var vectorAbilityList = [["Direction", 0, 0, 0, 0, 1, "everything"], ["Magnitude", 20, 30, Number.MAX_VALUE, 0, Number.MAX_VALUE, "everything"], ["Oh Yeah", 1, 1, 0, 0, 1, "everything"]];

  // Put all abilities in another array list, in the same order that the names of the Pokemon in the first array is
  var abilities = [pikachuAbilityList, squirtleAbilityList, mewtwoAbilityList, alakazamAbilityList, charmanderAbilityList, greninjaAbilityList, lucarioAbilityList, amoongussAbilityList, zoroarkAbilityList, starmieAbilityList, wailordAbilityList, diglettAbilityList, burmyAbilityList, []];
  // Put all stats in another array list, in the same order that the names of the Pokemon in the first array is
  var stats = [pikachuStats, squirtleStats, mewtwoStats, alakazamStats, charmanderStats, greninjaStats, lucarioStats, amoongussStats, zoroarkStats, starmieStats, wailordStats, diglettStats, burmyStats, dittoStats];

  // Set variables that determine if you pick a valid Pokemon.
  let applicablePokemons = 0;
  let unapplicablePokemonChosen = false;
  let pokemonOptions = "";

  // Make a string that displays all applicable Pokemon (excluding the easter egg Pokemon)
  for (let i = 0; i < allApplicablePokemons.length; i++) {
    pokemonOptions += ("\n" + allApplicablePokemons[i]);
  }

  alert("Welcome to the Pokemon game! In this game, you will be fighting as a Pokemon against an AI with a different Pokemon!\n\nHealth:\nEach Pokemon starts with a different amount of health. You must reduce the amount of health of the enemy down to 0 or less to win. If the enemy reduces your health to 0 or less, you will lose. If you and the enemy end up at 0 or less health at the end of the enemy's turn, you will win because you dealt the damage first. Some abilities let you regain health, which vary from Pokemon to Pokemon.\nEnergy:\nAll abilities cost a certain amount of energy! You can't play an ability if you don't have enough energy. You can regain 20 energy by not doing any damage to the enemy. Typically the Heal/Plan/Rest ability deals no energy.\nAbilities:\nSome abilities will do certain things. Many abilities will deal damage to the other Pokemon. Some abilities will have a damage multiplier attached to it. This will multiply the damage your Pokemon will deal for the next turn. Most abilities will also have a strength attached to it. If you play that ability and the enemy has the same weakness, your damage will be multiplied by 1.5-2. If the game stretches on to turn 7, all abilities will double their damage.\n\nNow you know everything you need to know when playing this game. Good luck and have fun!")

  // Create your Pokemon
  while (applicablePokemons === 0) {
    // Get player to choose Pokemon
    if (!unapplicablePokemonChosen) { // Check if the player already entered a value and it is an invalid choice
      yourPokemon = prompt("Which Pokemon do you want to play? Type in your answer. You can play the following:" + pokemonOptions); // If so, display this message
    } else {
      yourPokemon = prompt("Invalid Pokemon. Which applicable Pokemon do you want to play? Type in your answer. You can play the following:" + pokemonOptions); // If not, display a different message.
    }

    // Create an array for your Pokemon's ability names
    if (yourPokemonAbilityNames == undefined) {
      yourPokemonAbilityNames = new Array();
    }

    // Loop through all Pokemon in the name array
    for (var i = 0; i < allApplicablePokemons.length; i++) {

      // If you entered a valid Pokemon
      if (yourPokemon === allApplicablePokemons[i]) {
        applicablePokemons++; // Increment applicable Pokemons chosen
        yourPokemonAbilities = abilities[i]; // Set your abilities to the specified Pokemon's abilities;
        yourPokemonStats = stats[i]; // Set your stats to the specified Pokemon's stats

        // Set the ability names array to the ability names in the ability array
        for (var j = 0; j < abilities[i].length; j++) {
          yourPokemonAbilityNames[j] = abilities[i][j][0] 
        }
      // Special code for the easter egg Pokemon
      } else if (yourPokemon === "Vector") {
        applicablePokemons++; // Increment applicable Pokemons chosen
        yourPokemonAbilities = vectorAbilityList; // Set your abilities to Vector's
        yourPokemonStats = vectorStats; // Set your stats to Vector's

        // Set the ability names array toVector's ability names
        for (var j = 0; j < vectorAbilityList.length; j++) {
          yourPokemonAbilityNames[j] = vectorAbilityList[j][0];
        }
      }
    }
    unapplicablePokemonChosen = true;
  }

  // Display special message for Vector
  if (yourPokemon === "Vector") {
    alert("DIRECTION AND MAGNITUDE, OH YEAH");
  }

  // Create enemy pokemon

  // Set a variable for a while loop
  let hasDifferentPokemon = false; // Create a variable that checks if the below while loop should loop
  while (!hasDifferentPokemon) { // Check if the enemy has a different Pokemon
    let randPokemonIndex = Math.floor(Math.random() * allApplicablePokemons.length); // Make random number that pulls a value from the Pokemon arrays
    enemyPokemon = allApplicablePokemons[randPokemonIndex]; // Set the enemy Pokemon to the Pokemon in the Pokemon names array
    enemyPokemonAbilities = abilities[randPokemonIndex]; // Set the enemy Pokemon's abilities to the specified ability array
    enemyPokemonStats = stats[randPokemonIndex]; // Set the enemy Pokemon's stats to the specified stat array
    if (yourPokemon !== enemyPokemon) { // Check if the enemy Pokemon is not the same as your Pokemon
      hasDifferentPokemon = true; // If not, break the while loop by setting the variable to true
    }
  }

  // Special Ditto Stuffs
  if (yourPokemon === "Ditto") { // If your Pokemon is Ditto
    yourPokemonAbilities = enemyPokemonAbilities; // Set your abilities to the enemies abilities
  }
  if (enemyPokemon === "Ditto") { // If the enemy Pokemon is Ditto
    enemyPokemonAbilities = yourPokemonAbilities; // Set their abilities to your abilities
  }


  while (gameRunning) {
    turn++; // Add 1 to turn
    globalDamageMultiplyer = Math.ceil(turn / 6); // Set globalDamageMultiplyer. This will multiply damage if the game drags on
    let globalDamageMsg = "";
    if (globalDamageMultiplyer != 1) {
      globalDamageMsg = "All abilities deal " + globalDamageMultiplyer + "x damage!";
    }

    // Prepare displayed message
    message = `\n\nYou (${yourPokemon}):\nHealth: ${yourPokemonStats[0]}\nEnergy: ${yourPokemonStats[1]}\nWeakness: ${yourPokemonStats[2]}\n\nEnemy (${enemyPokemon}):\nHealth: ${enemyPokemonStats[0]}\nEnergy: ${enemyPokemonStats[1]}\nWeakness: ${enemyPokemonStats[2]}`
    damageMessage = ""; // An extra string that will appear if you attack a weak spot in the enemy

    // Prepare for your turn
    let abilityArrayIndex; // This is the number that specifies which slot in your Pokemon's abilities the code checks for
    repeatPromptAbility = 0; // Checks if the game asks for your ability more than once
    gotAbility = false; // Checks if you chose a valid ability
    alert("Your turn!"); // Display message

    // Get an ability
    while (!gotAbility) { // Check if the player chose a valid ability
      abilityArrayIndex = undefined;
      let abilityString = ""; // A string that displays valid abilities
      for (let i = 0; i < yourPokemonAbilities.length; i++) { // Loop through all of your Pokemon's abilities
        abilityString += (yourPokemonAbilities[i][0]); // Add the name of the ability onto abilityString
        if (yourPokemonAbilities[i][6] != "") { // if your Pokemon's abilities have a strength
          abilityString += (" - Strength: " + yourPokemonAbilities[i][6]) // Add a message displaying what this abilities strength is
        }
        if (yourPokemonAbilities[i][1] != 0 && yourPokemonAbilities[i][2] != 0) { // If this Pokemon's maxDamage and minDamage does not equal 0
          abilityString += ("   " + (yourPokemonAbilities[i][1] * globalDamageMultiplyer) + "-" + (yourPokemonAbilities[i][2] * globalDamageMultiplyer) + "D") // Add a message displaying the amount of damage this ability can deal
        }
        abilityString += ("   " + yourPokemonAbilities[i][3] + "E") // Add a message displaying the amount of energy this ability costs
        if (yourPokemonAbilities[i][5] != 1) { // Check to see if the Pokemon will multiply damage next turn. If so:
          abilityString += ("   " + yourPokemonAbilities[i][5] + "x damage next turn") // Add a message displaying how much damage your next ability will be multiplied
        }
        abilityString += "\n" // Add a new line
      }
      
      let matchs = false; // Create variable that will become true if the player enters a valid Pokemon
      let performActionMsg = ""; // Create string that shows instructions to the player.
      if (repeatPromptAbility === 0) { // If the game prompts for an input the FIRST time:
        performActionMsg = "Which ability would you like to play? Type in your answer. You may play:\n" // Set performActionMsg to this string.
      } else if (repeatPromptAbility === 1) { // If the game prompts you because you entered an invalid ability:
        performActionMsg = "Oops! Please choose an ability you would like to play. Type in your answer. You may play: \n" // Set performActionMsg to this string.
      } else if (repeatPromptAbility === 2) { // If the game prompts you because you do not have enough energy to perform the action:
        performActionMsg = "Uh oh! You do not have enough energy to perform this ability! Please choose a different ability. Type in your answer. You may play: \n" // Set performActionMsg to this string.
      }
      abilityChosen = prompt("Turn " + turn + "\n" + performActionMsg + abilityString + message); // Prompt the player for an ability
      for (let i = 0; i < yourPokemonAbilities.length; i++) { // Loop through all Pokemon's abilities
        if (abilityChosen === yourPokemonAbilities[i][0]) { // If the NAME inputted ability matches the NAME (index 0) of one of the elements in the ability array
          if (yourPokemonStats[1] >= yourPokemonAbilities[i][3]) { // If your energy is greater than or equal to the energy cost of that ability
            matchs = true; // Tell the computer you found an ability
            chosenAbility = abilityChosen; // Set the ability to the input
          }
          abilityArrayIndex = i; // Set the variable that references the slot in the Pokemon's ability array to the current index in the 'for' loop for future referrence.
        }
      }
      if (matchs) { // Check if the player inputted a valid Pokemon
        gotAbility = true; // End the while loop that prompts for an ability
      } else if(abilityArrayIndex != undefined && yourPokemonStats[1] < yourPokemonAbilities[abilityArrayIndex][3]) { // IF the player inputted an ability on the array but don't have enough energy to perform it
        repeatPromptAbility = 2; // Repeat the code with a different message
      } else { // Else
        repeatPromptAbility = 1; // Repeat the code with a different message
      }
    }
    
    // Calculate damage/heal
    let playerWeaknessDamageMultiplyer = 1; // Create a variable that will multiply the Pokemon's damage
    if (enemyPokemonStats[2] === yourPokemonAbilities[abilityArrayIndex][6]) { // If the player's ability hits a weakness in the enemy
      playerWeaknessDamageMultiplyer = (Math.random() * 0.5) + 1.5; // Set playerWeaknessDamageMultiplyer to a number between 1.5 and 2
    }
    let baseDamage = (Math.round(Math.random() * (yourPokemonAbilities[abilityArrayIndex][2] - yourPokemonAbilities[abilityArrayIndex][1])) + yourPokemonAbilities[abilityArrayIndex][1]) * globalDamageMultiplyer; // Calculate the regular damage (damage that does not include weakness or previous Pokemon's damage modifier). This includes globalDamageMultiplyer though
    let damageDealt = Math.round(baseDamage * playerWeaknessDamageMultiplyer * playerPreviousActionDamageMultiplyer) // Calculate TOTAL damage and round it. This includes accounting for hitting a weak spot in the enemy and your previous Pokemon's damage modifier
    enemyPokemonStats[0] -= damageDealt; // Subtract damage
    yourPokemonStats[0] += yourPokemonAbilities[abilityArrayIndex][4]; // Add health to your Pokemon according to the array
    yourPokemonStats[1] -= yourPokemonAbilities[abilityArrayIndex][3]; // Subtract energy from your Pokemon according to the array
    if (damageDealt === 0) { // If you do not deal damage
      if (yourPokemon === "Vector") { // If you used the Easter Egg Pokemon
        yourPokemonStats[1] = Number.MAX_VALUE; // Set your energy to Infinity
      } else { // For regular Pokemon:
        yourPokemonStats[1] += 20; // Add 20 energy to your Pokemon
      }
    }
    playerPreviousActionDamageMultiplyer = yourPokemonAbilities[abilityArrayIndex][5]; // Set the damage modifier of your Pokemon accordingly
    if (playerPreviousActionDamageMultiplyer != 1) { // If your damage modifier does not equal 1
      damageMessage = `Your Pokemon will deal ${playerPreviousActionDamageMultiplyer}x damage next turn!` // Set a special message that explains how much more damage your Pokemon will deal next turn
    } else { // Otherwise
      damageMessage = ""; // Do not set this message
    }

    // Update message and show stats and your actions
    message = `You (${yourPokemon}):\nHealth: ${yourPokemonStats[0]}\nEnergy: ${yourPokemonStats[1]}\nWeakness: ${yourPokemonStats[2]}\n\nEnemy (${enemyPokemon}):\nHealth: ${enemyPokemonStats[0]}\nEnergy: ${enemyPokemonStats[1]}\nWeakness: ${enemyPokemonStats[2]}\n\n`

    // Write message
    if (playerWeaknessDamageMultiplyer == 1) { // If your Pokemon's weakness damage multiplyer if 1
      alert(`You used ${yourPokemonAbilities[abilityArrayIndex][0]} and dealt ${damageDealt} damage, using ${yourPokemonAbilities[abilityArrayIndex][3]} energy in the process. You gained ${yourPokemonAbilities[abilityArrayIndex][4]} health. ${damageMessage}`); // Alert a message
    } else { // Otherwise
      alert(`You used ${yourPokemonAbilities[abilityArrayIndex][0]} and dealt ${damageDealt} damage, using ${yourPokemonAbilities[abilityArrayIndex][3]} energy in the process. Since you attacked a weak spot in the enemy, your damage was increased from ${baseDamage} to ${damageDealt}. You gained ${yourPokemonAbilities[abilityArrayIndex][4]} health. ${damageMessage}`); // Write a slightly different message
    }
    damageMessage = ""; // Reset damageMessage

    // Enemy's turn
    let hasValidAbility = false; // Detect if the enemy chose a valid ability
    let enemyAbilityIndex; // Variable to store which ability the enemy references from their ability array
    while (!hasValidAbility) { // Loop if the enemy did not choose a valid ability
      let randomAbility = Math.floor(Math.random() * enemyPokemonAbilities.length); // Pick a random number. This will be the number that references part of the ability array
      if (enemyPokemonAbilities[randomAbility][3] <= enemyPokemonStats[1]) { // If the enemy has enough energy to perform the ability
        hasValidAbility = true; // Tell the computer the enemy chose a valid ability
        enemyAbilityIndex = randomAbility; // Set the index of the ability to the random number
      }
    }

    // Calculate enemy stuff
    let enemyWeaknessDamageMultiplyer = 1; // Set weakness damage multiplier for the enemy to one
    if (yourPokemonStats[2] === enemyPokemonAbilities[enemyAbilityIndex][6]) { // If the enemy attacks a weak spot in the player
      enemyWeaknessDamageMultiplyer = (Math.random() * 0.5) + 1.5; // Set the weakness damage multiplier to a random number between 1.5 and 2
    }
    let enemyBaseDamage = (Math.round(Math.random() * (enemyPokemonAbilities[enemyAbilityIndex][2] - enemyPokemonAbilities[enemyAbilityIndex][1])) + enemyPokemonAbilities[enemyAbilityIndex][1]) * globalDamageMultiplyer; // Calculate base damage. This does not include weakness damage multiplier or previous damage multiplier
    let enemyDamageDealt = Math.round(enemyBaseDamage * enemyWeaknessDamageMultiplyer * enemyPreviousActionDamageMultiplyer) // Calculate TOTAL damage for the enemy and round the number
    yourPokemonStats[0] -= enemyDamageDealt; // Remove hp from your Pokemon
    enemyPokemonStats[0] += enemyPokemonAbilities[enemyAbilityIndex][4]; // Give the enemy hp accordingly
    enemyPokemonStats[1] -= enemyPokemonAbilities[enemyAbilityIndex][3]; // Subtract energy from the enemy accordingly
    if (enemyDamageDealt === 0) { // If the enemy deals no damage
      enemyPokemonStats[1] += 20; // Add 20 energy to this Pokemon (FYI the enemy can NEVER be Vector, that is a player-exclusive feature)
    }
    enemyPreviousActionDamageMultiplyer = enemyPokemonAbilities[enemyAbilityIndex][5]; // Set your next damage multiplyer accordingly
    if (enemyPreviousActionDamageMultiplyer != 1) { // If your Pokemon's next damage multiplier does not equal 1
      damageMessage = `The enemy will deal ${enemyPreviousActionDamageMultiplyer}x damage next turn!` // Set a special message to display later
    } else { // Otherwise
      damageMessage = ""; // Reset the special message
    }

    // Update message and show stats and enemy actions
    message = `You (${yourPokemon}):\nHealth: ${yourPokemonStats[0]}\nEnergy: ${yourPokemonStats[1]}\nWeakness: ${yourPokemonStats[2]}\n\nEnemy (${enemyPokemon}):\nHealth: ${enemyPokemonStats[0]}\nEnergy: ${enemyPokemonStats[1]}\nWeakness: ${enemyPokemonStats[2]}\n\n`

    if (enemyWeaknessDamageMultiplyer == 1) { // If the weakness damage multiplier is equal to 1
      alert(`The enemy used ${enemyPokemonAbilities[enemyAbilityIndex][0]} and dealt ${enemyDamageDealt} damage, using ${enemyPokemonAbilities[enemyAbilityIndex][3]} energy in the process. The enemy gained ${enemyPokemonAbilities[enemyAbilityIndex][4]} health. ${damageMessage}`); // Alert message explaining what the enemy did
    } else { // Otherwise
      alert(`The enemy used ${enemyPokemonAbilities[enemyAbilityIndex][0]} and dealt ${enemyDamageDealt} damage, using ${enemyPokemonAbilities[enemyAbilityIndex][3]} energy in the process. Since they attacked a weak spot in you, their damage was increased from ${enemyBaseDamage} to ${enemyDamageDealt}. The enemy gained ${enemyPokemonAbilities[enemyAbilityIndex][4]} health. ${damageMessage}`); // Show slightly different message explaining what the enemy did
    }

    damageMessage = ""; // Reset damageMessage

    // Test to see if game ends
    if (yourPokemonStats[0] <= 0) { // If the PLAYER has less than 0 health
      playerWon = false; // Say the player lost
      gameRunning = false; // End the game (break the gameRunning loop)
    }
    if (enemyPokemonStats[0] <= 0) { // If the ENEMY has less than 0 health
      playerWon = true; // Say the player won
      gameRunning = false; // End the game (break the gameRunning loop)
    }

    // Update message
    message = `You (${yourPokemon}):\nHealth: ${yourPokemonStats[0]}\nEnergy: ${yourPokemonStats[1]}\nWeakness: ${yourPokemonStats[2]}\n\nEnemy (${enemyPokemon}):\nHealth: ${enemyPokemonStats[0]}\nEnergy: ${enemyPokemonStats[1]}\nWeakness: ${enemyPokemonStats[2]}\n\n`
  }
  // Tell the player who won
  if (playerWon) { // If the player won
    alert("Congratulations, you won the game! Ending stats:\n\n" + message); // Say the player won
  } else { // If the player lost
    alert("You lost the game! Ending stats:\n\n" + message); // Say the player lost
  }

  // On game end
  if (!confirm("Do you want to play again? (Press OK to play agin, Cancel to not)")) { // Ask if the player wants to play again and detect if they do NOT
    running = false; // End the entire game loop
  }
  gameRunning = true; // Start the gameRunning loop again
}