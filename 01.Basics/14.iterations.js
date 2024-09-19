/*
//FOR LOOP

const arr = ["Thor", "Black Panther", "Wanda", "Gamora"];
for(let i =0; i<arr.length; i++ ){
    console.log (arr[i]);
}


for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}:`)
    for (let j = 1; j <= 10; j++){
        console.log(`${i}*${j}=${i*j}`)    
    }
}
 */


/*
//BREAK 
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is detected in break");
        break;
    }
    console.log(` index : ${index}`);
}

//Continue
for (let index = 0; index < 10; index++) {
    if(index == 5){
        console.log("5 is detected in continue");
        continue;
    }
    console.log(` index: ${index}`);
}
 */


//WHILE LOOP
const arr = ["Thor", "Black Panther", "Wanda", "Gamora"];
let i =0
while (i<arr.length) {
    console.log(arr[i]);
    i =i+1
}


//Do LOOP

const newArr = ["Superman", "Batman", "Flash", "Wonder Women"];

let idx =0
do {
    console.log(newArr[idx]);
    idx++
}while (idx<newArr.length)