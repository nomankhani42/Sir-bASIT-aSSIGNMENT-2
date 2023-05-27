

var inputHrs=document.getElementById('inputHrs');
var inputMins=document.getElementById('inputMins');
var inputSeconds=document.getElementById('inputSeconds');

var hrs=document.getElementById('hrs');
var mins=document.getElementById('mins');
var secs=document.getElementById('secs');

var hours;
var minutes;
var seconds;
var interval;

var setBtn=document.getElementById('setBtn');


function set(){
setBtn.disabled=true;
     hours=+inputHrs.value;
 minutes=+inputMins.value;
 seconds=+inputSeconds.value;

    
  hrs.innerHTML=hours;
  mins.innerHTML=minutes;
  secs.innerHTML=seconds;
}

function start(){
   

     interval=setInterval(function(){
        seconds--;
        if(seconds<=0){
            minutes--;
            seconds=59;
        }
      else  if(minutes<0){
        hours--;
        minutes=59;
      }
    
     else if(hours<0){
        clearInterval(interval)
         hours=0;
        
        minutes=0;
        second=0;
       
       } 
      
     
        hrs.innerHTML=hours;
        mins.innerHTML=minutes;
        secs.innerHTML=seconds;
    },1000);
    
    
}

function pause(){
    clearInterval(interval);
    
}

 