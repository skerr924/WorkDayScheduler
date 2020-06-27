
$(document).ready(function() {

var timeNowDisplay; 
var timeAndDateNow; 
// var buttonHour; 
var events = [];
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

function saveEvent() {
    event.preventDefault();
    buttonHour = $(this).attr('id');
    var parent = $(this).parent();
    var grandparent = parent.parent();
    var newEvent = grandparent.find("textarea")[0].value;
    events.push(newEvent);
    storeEvent();
    getStoredEvents();
  }

// function storeEvent() {
//     // Stringify and set each event item in localStorage to
//     localStorage.setItem("events", JSON.stringify(events));
//   }

// //get stored events from local storage 
// function getStoredEvents(){
//     console.log("get stored events");
//     var storedEvents = JSON.parse(localStorage.getItem("events")); 
//     if (storedEvents !== null){
//         events = storedEvents; 
//     }

//     renderEvents(); 
// }

// function renderEvents(){
//     console.log(events);
// }

// $(".saveBtn").on("click", saveEvent);

// });

  
//   //all event listeners below: 

//   highScoreForm.addEventListener("submit", function(event) {
//       event.preventDefault();
    
//       var nameText = nameInput.value.trim() + " with a score of " + finalScore;
    
//       // Return from function early if submitted nameText is blank
//       if (nameText === "") {
//         return;
//       }
  
//       // Add new nameText to names array, clear the input
//       names.push(nameText);
//       nameInput.value = "";
    
//       // Store updated todos in localStorage, re-render the list
//       storeNames();
//       renderHighScores();
//   });