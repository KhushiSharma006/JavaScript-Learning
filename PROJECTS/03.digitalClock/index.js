
const clock = document.getElementById("clock");

//OR
//const clock = document.querySelector("#clock");


//console.log(date.toLocaleString());


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleString();

},1000) //interval is in milliSec

