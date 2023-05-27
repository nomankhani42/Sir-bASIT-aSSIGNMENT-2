var hrs = document.getElementById('hrs');
var mins = document.getElementById('mins');
var secs = document.getElementById('secs');


var displayhrs = 0;
var displaymins = 0;
var displaysecs = 0;
var interval;

document.getElementById('pauseBtn').disabled=true;
document.getElementById('resetBtn').disabled=true;


function start() {
    document.getElementById('startBtn').disabled=true;
    document.getElementById('pauseBtn').disabled=false;
document.getElementById('resetBtn').disabled=false;
    interval = setInterval(function () {
        {
            displaysecs++;
            if (displaysecs == 59) {
                displaymins++;
                displaysecs = 0;
            }
            else if (displaymins == 59) {
                displayhrs++;
                displaymins = 0;
            }
            secs.innerHTML = displaysecs;
            mins.innerHTML = displaymins;
            hrs.innerHTML = displayhrs;
        }
    }, 1000)
}


function pause(){
    document.getElementById('startBtn').disabled=false;
    document.getElementById('pauseBtn').disabled=true;
document.getElementById('resetBtn').disabled=false;
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
     displayhrs = 0;
 displaymins = 0;
 displaysecs = 0;
 secs.innerHTML = displaysecs;
 mins.innerHTML = displaymins;
 hrs.innerHTML = displayhrs;
 
 document.getElementById('startBtn').disabled=false;
    document.getElementById('pauseBtn').disabled=false;
document.getElementById('resetBtn').disabled=true;
}