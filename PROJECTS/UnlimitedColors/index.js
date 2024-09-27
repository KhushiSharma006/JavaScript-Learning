
const randomColor = function(){
    const hex = '01234567890ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];        
    }
    console.log(color);
    return color;    
}

let intervalID;

const startColorChanging = function(){
    if(!intervalID){
      const changebgColor = function(){
        document.body.style.backgroundColor = randomColor();
      }
      intervalID = setInterval(changebgColor,1500);
   }
    
}

const stopColorChanging = function(){
    if(intervalID){
        clearInterval(intervalID);
        intervalID = null; 
    }
    
    
}

document.querySelector('#start').addEventListener('click',startColorChanging );

document.querySelector('#stop').addEventListener('click',stopColorChanging);


