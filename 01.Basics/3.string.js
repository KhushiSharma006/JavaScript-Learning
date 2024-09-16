const name = "Khushi";

console.log(`Hello my name is ${name}.`);

const str = new String("JavaScript")

console.log(str[5]);
console.log(str.length);
console.log(str.__proto__);
console.log(str.toUpperCase());
console.log(str.charAt(3));
console.log(str.indexOf('a')); 

const newStr = str.substring(0,4);
console.log(newStr);

const anotherStr = str.slice(1,5) //(-5,2) 
console.log(anotherStr); 

const nameStr  = "  JavaScript  "
console.log(name);
console.log(name.trim());

const url = "https://khushi.com/ks%20as"
console.log(url.replace('%20', '-'));
console.log(url.includes('ks'));


//convert string into array 
const superHeros = "Batman,spiderman,superman,ironman";
console.log(superHeros.split(','));