
var hourBlock =document.querySelectorAll(".hourBlock");
console.log(moment().hour)

//using a function to set the current time dynamically
function setCurrentTime(){
    $("#currentDay").text(moment().format('dddd, MMMM Do, h:mm:ss a'));
    
    // hourBlock.forEach(function())};
    var nowInHours = moment().hour();
    for (var i=0;i < hourBlock.length;i++){
        // console.log(hourBlock[i].dataset.hour)
        if (nowInHours > hourBlock[i].dataset.hour){
            hourBlock[i].classList.add("past")
        }
        else if(nowInHours == hourBlock[i].dataset.hour){
            hourBlock[i].classList.add("present")
        }
        else {
            hourBlock[i].classList.add("future")
        } 
    }
    //});
//     if (nowInHours > ("data-hour")){
//         element.addClass("past")}
//     // loop through, using if and else statements to check if past or future and add class.
};

//calling the time set function every second
setInterval(setCurrentTime,1000)

// Loops through input area to get item from local storage
var activityIndex = [1,2,3,4,5,6,7,8,9];
for (var i = 0; i < activityIndex.length; i++) {
    var thingsToDo = localStorage.getItem(activityIndex[i]);
    //console.log(".block" + activity[i])
    $(".block" + activityIndex[i]).val(thingsToDo);
}

// Event listener to save to local stroage
$(".saveBtn").click(function () {
    event.preventDefault();
    var activity = $(this).siblings(".hourBlock").val();
    var hourIndex = $(this).parent().data("hour");
    localStorage.setItem(hourIndex, activity);
    console.log(hourIndex);
    console.log(activity);
});

// starts the day and adds 9 hours to give 9am
var startOfDay = moment().startOf('day').add(9, "hours");

// creating the time blocks for the html
var time1 = startOfDay.format('hh:mm A');
$(".time9am").text(time1);

var time2 = startOfDay.add(1, "h").format('hh:mm A');
$(".time10am").text(time2);

var time3 = startOfDay.add(1, "h").format('hh:mm A');
$(".time11am").text(time3);

var time4 = startOfDay.add(1, "h").format('hh:mm A');
$(".time12pm").text(time4);

var time5 = startOfDay.add(1, "h").format('hh:mm A');
$(".time1pm").text(time5);

var time6 = startOfDay.add(1, "h").format('hh:mm A');
$(".time2pm").text(time6);

var time7 = startOfDay.add(1, "h").format('hh:mm A');
$(".time3pm").text(time7);

var time8 = startOfDay.add(1, "h").format('hh:mm A');
$(".time4pm").text(time8);

var time9 = startOfDay.add(1, "h").format('hh:mm A');
$(".time5pm").text(time9);

