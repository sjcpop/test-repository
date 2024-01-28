var main = function (input) {
  var numberOfWeeks = input;
  var minutesInAnHour = 60
  var hoursInADay = 24
  var daysInAWeek = 7
  var numberOfMinutes = numberOfWeeks * daysInAWeek * hoursInADay * minutesInAnHour
  var myOutputValue = "Total number of minutes in " + input + "is" + numberOfMinutes + " weeks";
  return myOutputValue;
};