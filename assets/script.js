
$(document).ready(function() {

var timeNowDisplay; 
var timeAndDateNow; 
var buttonHour; 
// var clockTime; 


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

//function compares the current time to the time listed in each time block 
// to see if it is past, present, or future and apply styles accordingly 
function compareTime () {
    $(".hour").each(function() {

        var hourBlock = parseInt($(this).attr("id"));
        var currentHour = moment().hours(); 
 
        if (hourBlock < currentHour) {
            $(this).addClass("past"); 
        }
        else if (hourBlock > currentHour) {
            $(this).addClass("future"); 
        }
        else {
            $(this).addClass("present");
        
        }
    })
}
//NOT FUNCTIONAL 
function saveEvent (){
    buttonHour = $(this).attr("id");
    var parent = $(this).parent();
    var grandparent = parent.parent();
    console.log(grandparent.find("input")); 
}

$(".saveBtn").on("click", saveEvent);

});