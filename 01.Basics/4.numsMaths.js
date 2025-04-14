
// -------------NUMBERS-------------

const score = 400
console.log(score)   // typeof of score is Number o/p: 400

const balance = new Number(100)
console.log(balance);//type of balance is object o/p:{Number: 100}

//change to string
console.log(balance.toString());
console.log(balance.toString().length);

//provides precision for large decima; value
console.log(balance.toFixed(5)); 


/* **Precision(x): 
   Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.  
            
*/
const num =  112.98
console.log(num.toPrecision(3)) //use carefully


/*toLocalString(): Converts a number to a string by using the current or specified locale. */

const number  =194993991300000
console.log(number.toLocaleString('en-IN'));//commas are written in indian standard (by default in US standards)


//--------------MATHS----------------------
//An intrinsic object that provides basic mathematics functionality and constants.

//JS has a math library

console.log(Math);
console.log(Math.abs(-6)); //Absolute value
console.log(Math.round(6.6));//7
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(5,6,8,9));
console.log(Math.max(10,100,20,200));

//**  Math.random()
//returns random num b/w  0 & 1

console.log(Math.random()); 

console.log(Math.floor(Math.random()*10) +1); 
//generat ramdom num b/w  1 & 10


//**to generate ramdom number b/w 2 numbers (min and max)
const min =10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
