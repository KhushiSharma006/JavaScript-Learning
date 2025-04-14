
//**JS arrays are resizable and can conatain a mix of different data types.

//array copy operations create Shallow copies'.
// Shallow Copy of an object is a copy whose properties share the same reference(point to the same underlying values )
// Deep copy of an object is a copy whose properties do not share the same references(point to the same underlying values)
const arr = [1,2,3,4,5]

const arr2 = new Array(1,2,3,4)

//-----Array Methods-----

//arr.push(6) :add 6 at last
//arr.pop() :delete last element
//arr.unshift(9) : add 9 at the beginning
//arr.shift() : delete 1st element

//console.log(arr.includes(5));
//console.log(arr.indexOf(3));
// (if element doe not exist indexOf() returns -1)

const newArr = arr.join() // convert array  into string
//Adds all the elements of an array into a string.
//console.log(newArr);
//console.log(typeof newArr);//String

// ******SLICE, SPLICE*******
/* SLICE does not include outer limit and *does not manipulate original arr.
  SPLICE include outer limit and *manipulate original arr */

/*console.log(arr2);

const myn1 = arr2.slice(1,3)
console.log(myn1);  

const myn2 = arr2.splice(1,3)
console.log(myn2);  

console.log(arr2);*/

const mcu = ["Thor", "Iron-man", "Hulk", "Black widow"];
const dc = ["Batman","Wonder Women", "Superman", "Flash", "Deadpool"]

//mcu.push(dc) // return arr in arr
//console.log(mcu[4][1]);

//*Concatination :for 2 array
//const allHeroes = mcu.concat(dc)
//console.log(allHeroes);

//**Spread : for 2 or more arrays
 allHeroes = [...mcu, ...dc]
console.log(allHeroes);

//**FLAT: return a new array with all sub-array element concatinated into it recursively up to the specified depth
const array = [1,2,3,[4,4,4],5,[6,7,[8,9]]];
const flatArr = array.flat(Infinity);//you can give exact depth
//console.log(flatArr);

console.log(Array.isArray("JavaScript"));
console.log(Array.from("JAVASCRIPT"));
console.log(Array.from({name:"Khushi"}));//Interesting (obj is not converting into array)

let s1 = 100
let s2= 200
let s3 = 300
console.log(Array.of(s1,s2,s3));




