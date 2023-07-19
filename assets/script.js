




$(function () {

// TODO: Add code to display the current date in the header of the page.
// ALSO ADDED TIME BECAUSE IT LOOKS NICE AND I WANTED TO TRY TO MAKE IT HAPPEN
  
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY // hh:mm A'));


//this is to change the color based on whether the time block is in the past/present/future

   //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
 

function colorHour() {
  //.each is to target all the classes of time block
  $('.time-block').each(function() {
  var timeNow = parseInt(dayjs().format('H'));
    var blockTime = $(this).attr('id').split("-");
  var hourMarker = parseInt(blockTime[1]);
   if (hourMarker === timeNow) {
    $(this).toggleClass('present');
  } else if (hourMarker > timeNow) {
    $(this).toggleClass('future');
  } else {
    $(this).toggleClass('past');
  }

});
}
colorHour();


  var saveButton = $('.saveBtn');
  
  saveButton.on('click', function() {
    // key is "id" which is the hour
    // value is the description
    var key =  $(this).parent().attr('id')
    var value = $(this).siblings('textarea').val()
   
    //this saves to the local storage but how to get here?
    window.localStorage.setItem(key, value);
  });
  
  
  for (var i = 9; i < 18; i++) {
  
    $('#hour-'+ i +' textarea').val(localStorage.getItem('hour-'+ i));
  }
  
  
  
    

});
