document.getElementsByClassName("btn1")[0].addEventListener("click",sa1);
function sa1(){
  alert("button 1 is clicked bsdk")
}
document.getElementsByClassName("btn2")[0].addEventListener("click",sa2);
function sa2(){
  alert("button 2 is clicked bsdk")
}
document.getElementsByClassName("btn3")[0].addEventListener("click",sa3);
function sa3(){
  alert("button 3 is clicked bsdk")
}
document.getElementsByClassName("btn4")[0].addEventListener("click",sa4);
function sa4(){
  alert("button 4 is clicked bsdk")
}

setInterval(async function(){ 
    document.querySelector("#bulb").classList.toggle("bulb")
}, 400);

