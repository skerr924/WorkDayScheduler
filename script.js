
$(document).ready(function() {

var timeNowDisplay; 
var timeNow; 
var currentHour; 

updateTime();
// alreadyPassed();


//function to continuously update the date and time 
function updateTime () {
    timeNowDisplay = $("#currentDay"); //option 1 
    timeNow = moment().format('MMMM Do YYYY, h:mm a');
    timeNowDisplay.text("The time now is: " + timeNow); 
    currentHour = moment().format('h');
    console.log(currentHour);
}
setInterval(updateTime, 1000);

// function alreadyPassed (){

// }

});