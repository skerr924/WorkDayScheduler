
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
        var after  = moment(clockTime, "hh a").isAfter(moment(blockTime, "hh a"));
        var future = moment(clockTime, "hh a").isBefore(moment(blockTime, "hha a")); 
        if (after === true) {
            $(this).addClass("past"); 
        }
        else if (future === true) {
            $(this).addClass("future"); 
        }
        else {
            $(this).addClass("present");
        
        }
    })
}


});