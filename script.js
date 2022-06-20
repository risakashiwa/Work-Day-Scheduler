alert("HELLO")
//set moment to a variable
var now = moment();

//create a variable for the current date
var currentDate = now.format("MM DD YYYY");


// Set date 
$("#currentDay").text("Today's Date : " + currentDate);

$(document).ready(function() {
    //for loop to get and display
    hourArr = $(".hour").toArray();
    for(i = 0; i < hourArr.length; i++){
        $(hourArr[i]).siblings("textarea").text(localStorage.getItem($(hourArr[i].attr("data-time"))));

    }
    
});



// For loop to print rows with timeblocks, taskbloks, and save buttons
for (i = 0; i < 9; i++){
    var rowBlock = $("<div>").addClass("row");
    var timeBlock = $("<div>").addClass("hour col-md-2").text(moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
    timeBlock.attr("data-time", moment("9:00 AM", "hh:mm A").add(i, "hours").format("hA"));
// Create a variable for the taskblock
    var taskBlock = $("<textarea>").addClass("col-md-9");
// Create a variable for the save block
var saveButton = $("<button>").addClass("saveBtn col-md-1").html("<i class='fas  fa-save'></i>");
// Append the container with the row
$(".container").append(rowBlock);
// Append the row with the time block
$(rowBlock).append(timeBlock);
// After the timeblock display the task block
$(timeBlock).after(taskBlock);
// After the taskblock display the save button
$(taskBlock).after(saveButton);
   
//if else statement to dermine the color of the row   
    
if (now.isSame(moment("9:00 AM", "hh:mm A").add(i, "hours"),"hours")){
    $(taskBlock).addClass("present");
// if the time is in the furture

} else if (now.isBefore(moment("9:00 AM", "hh:mm A").add(i, "hours"),"hour")){
$(taskBlock).addClass("future");
//if the time is in the past
} else if (now.isAfter(moment("9:00 AM", "hh:mm A").add(i, "hours"), "hour")){
    $(taskBlock).addClass("past");
}

}

// Save event in local storage
$(".saveBtn").on("click", function(){
localStorage.setItem($(this).siblings("div.hour").attr)("data-time"), $(this).siblings("textarea").val()

});