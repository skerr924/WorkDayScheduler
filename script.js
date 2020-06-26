
$(document).ready(function() {

var timeNowDisplay; 
var timeAndDateNow; 
var clockTime;


updateTime();
// alreadyPassed();
compareTime();

//function to continuously update the date and time 
function updateTime () {
    timeNowDisplay = $("#currentDay"); 
    timeAndDateNow = moment().format('MMMM Do YYYY, h:mm a');
    clockTime = moment().format('h:mm a');
    timeNowDisplay.text("The time now is: " + timeAndDateNow); 
}
setInterval(updateTime, 1000);


function compareTime () {
    $(".hour").each(function() {
        var blockTime = $(this).html()
        if (clockTime.isAfter(blockTime)) {
        $(this).addClass("hide"); 
        }

        

    })
}


});