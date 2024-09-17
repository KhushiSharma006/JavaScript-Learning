
//javascript arrays are resizable and can conatain a mix of different data types

//array copy operations creste Shallow copies'.
// Shallow Copy of an object is a copy whose properties share the same reference(point to the same underlying values )
// Deep copy of an object is a copy whose properties do not share the same references(point to the same underlying values)
const arr = [1,2,3,4,5]

const arr2 = new Array(1,2,3,4)

//-----Array Methods-----

//arr.push(6)
//arr.pop()
//arr.unshift(9)
//arr.shift()

//console.log(arr.includes(5));
//console.log(arr.indexOf(3));

const newArr = arr.join() // convert array  into string

//console.log(newArr);
//console.log(typeof newArr);

// SLICE, SPLICE
/*console.log(arr2);

const myn1 = arr2.slice(1,3)
console.log(myn1); // slice does not include outer limit and does not manipulate original arr 

const myn2 = arr2.splice(1,3)
console.log(myn2);  // splice include outer limit and manipulate original arr

console.log(arr2);*/

const mcu = ["Thor", "Black Panther", "Wanda", "Gamora"];
const dc = ["Batman","Wonder Women", "Superman", "Flash", "Deadpool"]

//mcu.push(dc)
//console.log(mcu[4][1]);

//concatination
//const allHeroes = mcu.concat(dc)
//console.log(allHeroes);

//Spread
// allHeroes = [...mcu, ...dc]
//console.log(allHeroes);

//FLAT: return a new array with all sub-array element concatinated into it recursively up to the specified depth
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




