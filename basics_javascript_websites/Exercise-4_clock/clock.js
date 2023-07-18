function liveclock()
{
    let time= new Date();
    let hour= time.getHours();
    let min= time.getMinutes();
    let sec= time.getSeconds();
     let currentTime = hour + ":"
            + min + ":" + sec 
   document.getElementById("sa").innerHTML=currentTime
}
setInterval(liveclock,1000)
liveclock();