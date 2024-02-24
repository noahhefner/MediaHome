export function getTodaysDate () {

  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  var date = new Date();

  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();

  return day + " " + month + " " + year;

}