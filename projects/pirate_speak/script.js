// Initialize variables
var date = new Date();
var name;
var inputtedDate;
var inputtedDay;
var inputtedMonth;
var inputtedYear;
var age = 100;
var calculatedYear;
var calculatedYearsTillAge;
var calculatedDaysTillNextBDay;
var nextBDay;
var millisPerDay = 24 * 60 * 60 * 1000;
var nextBirthdayAge;
var months = new Array();
var isBirthdayMessage;

// Add values to months
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Opening message
alert("Ahoy! In this program, I shall find out when ye turn 100.");

// Ask for name
name = prompt("Wha' be yer name?");
// Ask for birthday
inputtedDate = prompt("Wha' date were ye born? Respond usin' this format: MM/DD/YYYY");

inputtedMonth =  parseInt(inputtedDate.slice(0, 2)); // Get characters 1 and 2 from input and turn it into an int and store it in inputtedMonth
inputtedDay =  parseInt(inputtedDate.slice(3, 5)); // Get characters 4 and 5 from input and turn it into an int and store it in inputtedDay
inputtedYear =  parseInt(inputtedDate.slice(6, 10)); // Get characters 7 to 10 from input and turn it into an int and store it in inputtedYear

inputtedDate = new Date(inputtedYear + age, inputtedMonth, inputtedDate + age, 0, 0, 0, 0); // Create new Date object, which will be the date you turn 'age'.

calculatedYear = inputtedYear + age; // Calculate the year you will turn specified age
calculatedYearsTillAge = inputtedYear + age - date.getFullYear(); // Calculate the number of years until you turn specified age

// Calculate number of DAYS until you turn specific age
nextBDay = new Date(date.getFullYear(), inputtedMonth - 1, inputtedDay, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()); // Create new Date object, making the date be your next birthday.
calculatedDaysTillNextBDay = Math.ceil((nextBDay.getTime() - date.getTime()) / millisPerDay); // Calculate days until next birthday
if (calculatedDaysTillNextBDay < 0) { // If calculated days until next birthday is less than 0
  calculatedDaysTillNextBDay += 365; // Add a full year to it
}

nextBirthdayAge = date.getFullYear() - inputtedYear; // Get your next age on your next birthday.

if (calculatedDaysTillNextBDay === 0) { // If your next b-day is in 0 days (AKA it is your birthday):
  isBirthdayMessage = `'ave a happy ${nextBirthdayAge} birthday!`; // Give a "happy birthday" message
} else { // Otherwise:
  isBirthdayMessage = `Yer ${nextBirthdayAge}th birthday will also be in ${calculatedDaysTillNextBDay} days!`; // Tell the user when their next birthday is.
}

// The final alert message.
alert(`Greetin's, ${name}. I be th' Computer 'n 'ave all th' booty o' th' Seven Seas. Me mind-readin' loot tells me yer birthday be on ${months[inputtedMonth - 1]} ${inputtedDay}, ${inputtedYear}, so ye will be ${age} on th' year ${calculatedYear}, which be in ${calculatedYearsTillAge} calendar years! ${isBirthdayMessage}`)