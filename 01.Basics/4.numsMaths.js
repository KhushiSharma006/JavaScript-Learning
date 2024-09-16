
// -------------NUMBERS-------------

const score = 400
console.log(score)   // typeof of score is Number

const balance = new Number(100)
console.log(balance);//type of balance is object
console.log(balance.toString().length);
console.log(balance.toFixed(5)); //no after decimal

const num =  112.98
console.log(num.toPrecision(3)) //use carefully

const number  =194993991300000
console.log(number.toLocaleString('en-IN'));//commas are written in indian standard


//--------------MATHS----------------------

//JS has a math library

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(6.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(5,6,8,9));
console.log(Math.max(10,100,20,200));

console.log(Math.random()); //generate ramdom num b/w  0 & 1

console.log(Math.floor(Math.random()*10) +1); 
//generat ramdom num b/w  1 & 10


//to generate ramdom number b/w 2 numbers (min and max)
const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
