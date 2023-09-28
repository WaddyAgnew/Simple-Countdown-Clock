var count = 61;
var intervalSec = 1000;   

let pauseBtn = document.getElementById('pause');


var interval = setInterval(function()
{
    
    document.getElementById("Clock-Face").innerHTML = -- count;

    
if (count == 0)
        clearInterval(interval);
   if (count == 0)
   document.getElementById("Clock-Face").innerHTML ="Done";
   if(interval == true){
   pause_clock();
   }
   return interval
}, 

intervalSec);



const pause = false;


// pause Clock
function pause_clock(){
 /* if(!pause){
       pause = true;
       
       clearInterval(interval);
       interval = null;
   }*/
   setTimeout(() =>5000);
}
//document.getElementById("pause").addEventListener("click", pause_clock);




//Resume clock
 function resume_clock(){
pause = false;

interval.start();

}
document.getElementById("resume").onclick = resume_clock; 