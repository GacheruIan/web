 
 function clock(){
    const x = new Date();
    const hours = x.getHours();
    const minutes = x.getMinutes();
    const sec = x.getSeconds()

    
     document.getElementById("hours").innerHTML = hours + ":";
     document.getElementById("minutes").innerHTML = minutes + ":";
     document.getElementById("seconds").innerHTML = sec
     }
     setInterval(clock,100);