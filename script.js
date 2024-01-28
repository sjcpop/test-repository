var rollDice = function:(){
  var randomNumber = Math.random() * 6;
  var randomInteger = Math.floor(randomNumber);
  var randomDiceRoll = randomInteger +1;
  return randomDiceRoll;
}

var main = function (input) {
  var numberOfWeeks = input;
  var minutesInAnHour = 60
  var hoursInADay = 24
  var daysInAWeek = 7
  var numberOfMinutes = numberOfWeeks * daysInAWeek * hoursInADay * minutesInAnHour
  var myOutputValue = "Total number of minutes in " + input + "is" + numberOfMinutes + " weeks";
  return myOutputValue;
};