var count = 61;
var intervalSec = 1000;   



var interval = setInterval(function()
{
    
    document.getElementById("Clock-Face").innerHTML = -- count;

    
if (count == 0)
        clearInterval(interval);
   if (count == 0)
   document.getElementById("Clock-Face").innerHTML ="Done";
   
}, intervalSec);



var pause = false;


// pause Clock
function pause_clock(){
   if(!pause){
       pause = true;

       
       clearInterval(interval);
       
   }
}
document.getElementById("pause").onclick = pause_clock;




//Resume clock
/* function resume_clock(){
pause = false;

interval.start();

}
document.getElementById("resume").onclick = resume_clock; */