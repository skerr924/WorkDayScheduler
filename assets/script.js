
$(document).ready(function() {

var timeNowDisplay; 
var timeAndDateNow; 
var buttonHour; 


updateTime();
compareTime();
getStoredEvents();


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

//function pulls the text of the textarea in the buttons same table row 
function saveEvent() {
    event.preventDefault();
    buttonHour = $(this).attr('hour');
    var parent = $(this).parent();
    var grandparent = parent.parent();
    var newEntry = grandparent.find("textarea")[0].value;
    var newEvent = {
        time: buttonHour, 
        event: newEntry, 
    }
    // newEvent.attr('id', buttonHour); 
    console.log(newEvent);
    events.push(newEvent);
    storeEvent();
  }

//adds new events to the local storage 
function storeEvent() {
    // Stringify and set each event item in localStorage to
    localStorage.setItem("events", JSON.stringify(events));
}

//get stored events from local storage 
function getStoredEvents(){
    var storedEvents = JSON.parse(localStorage.getItem("events")); 
    if (storedEvents == null){
        storedEvents = [];
    }
    renderEvents(storedEvents); 
}

//displays the stored events on the screen in their proper time frame 
function renderEvents(events){
    for (i = 0; i < events.length; i++){
       
        var time = events[i].time; 
        var text = events[i].event; 
        $("."+time+"-time").val(text);
    }
}

//empties the event textarea on the screen 
function emptyEvent() {
    var cancelledEvent = $(this).attr("hour")
    $("."+cancelledEvent+"-time").val("");
    removeFromStorage(cancelledEvent);
}

//removes the deleted event from the local storage 
function removeFromStorage(eventHour) {
    var storedEvents = JSON.parse(localStorage.getItem("events"))
    
    var index = storedEvents.findIndex(function(item){
        return item.time === eventHour; 
    }); 
    storedEvents.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(storedEvents));
}


$(".remove").on("click", emptyEvent);
$(".saveBtn").on("click", saveEvent);

});