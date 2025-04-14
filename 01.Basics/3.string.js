const name = "Khushi";

console.log(`Hello my name is ${name}.`);

/*STRING: typeof - object
         {key : value} pair */

const str = new String("JavaScript")

console.log(str[5]); //accessing the value at key:5
console.log(str.length);
console.log(str.__proto__); 

console.log(str.toUpperCase());
console.log(str.charAt(3));
console.log(str.indexOf('a')); 

const newStr = str.substring(0,4);
/* 1. last index will not be included.
   2. only positive value*/
console.log(newStr); // o/p: Java

const anotherStr = str.slice(1,5) 
/* can be negetive 
   (-5,2) start from last */
console.log(anotherStr); 

//TRIM: remove whitespaces
const nameStr  = "  JavaScript  "
console.log(nameStr);
console.log(nameStr.trim());

const url = "https://khushi.com/ks%20as"
console.log(url.replace('%20', '-')); 
console.log(url.includes('ks')); //true



//convert string into array 
const superHeros = "Batman,spiderman,superman,ironman";
console.log(superHeros.split(','));