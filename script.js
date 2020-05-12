// NATIVE JAVASCRIPT CODE: represents current hour (1-24)

var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();

var oneSecond = 1000;

var isPartyTime = false;

var updateClock = function ()
{

var lolcat = document.getElementById ("lolcat");
var message = document.getElementById ("timeEvent");
var messageText;

var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
 
if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "IZ PARTEE TIME!!";
}else if (time == napTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
}else if (time == lunchTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
}else if (time == wakeupTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
}else if (time < noon){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Good morning, Mate!";
}else if (time > evening){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Good Evening, Mate!";
}else{
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Good afternoon, Mate!";
}

message.innerText = messageText;
lolcat.src = image;

showCurrentTime ();

};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById ("clock");
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();



setInterval( updateClock, oneSecond);

var lolcatButton = document.getElementById("lolcatButton");
var lolcatImage = document.getElementById("lolcatImage");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
 
var showMeTheLolcat = function(){
    lolcatImage.src = image;
};
 
lolcatButton.addEventListener("click", showMeTheLolcat);

// set isPartyTime to false

 
var partyEvent = function() {
   
   //check isPartyTime
   if (isPartyTime === false){ 
        // if isPartyTime is false, change it to true 
        //so we know the button has been clicked
        isPartyTime = true; 
        // set time to partyTime so the lolCat clock 
        //image and message update to the partyTime image and message
        time = partyTime; 
    } else { 
        // if isPartyTime is true, change it to false to end the party
        isPartyTime = false; 
        // set time back to the current time
        time = new Date().getHours(); 
    }
 
};