
$(document).ready(function() {

var timeNowDisplay; 
var timeNow; 

updateTime();
//function to continuously update the date and time 
function updateTime () {
    timeNowDisplay = $("#currentDay"); //option 1 
    timeNow = moment().format('MMMM Do YYYY, h:mm a');
    timeNowDisplay.text("The time now is: " + timeNow); 
}
setInterval(updateTime, 1000);

});