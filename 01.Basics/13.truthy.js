
/* ------FALSY VALUES-------
false,0,-0, BigInt 0n, "" (empty string),null, undefined, NaN (not a number)

-------TRUTHY VALUES-------
"0", 'false', " " (string with space), [], {}, function(){}
*/



//to check if an array is empty
const emptyArr = []
if(emptyArr.length === 0){
    console.log("Array is empty");
}

//to check if an Object is empty
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??) : null  undefined

let val1 

val1 = 5 ?? 10 //5
val1 = null ?? 10 //10
val1 =undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10 (1st value)

//console.log(val1)

//Terniary Operation
// condition ? true :false

const age = 8
age>=18 ? console.log("you can vote") : console.log("you can not vote")