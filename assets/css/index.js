 
 function clock(){
    const x = new Date();
    const hours = x.getHours();
    const minutes = x.getMinutes();
    const sec = x.getSeconds()
     if (hours<10){
        hours = "0" + hours;
     }
     if (hours<10){
        minutes = "0" + minutes;
     }
     if (sec<10){
        sec = "0" + sec;
     }
    
    
     document.getElementById("hours").innerHTML = hours + ":";
     document.getElementById("minutes").innerHTML = minutes + ":";
     document.getElementById("seconds").innerHTML = sec
     }
     setInterval(clock,100);