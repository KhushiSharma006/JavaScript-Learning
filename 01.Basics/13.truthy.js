//FALSY VALUES
//false,0,-0, BigInt 0n, "" ,null, undefined, NaN

//TRUTHY VALUES
//"0", 'false', " ", [], {}, function(){}



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

//Nullish Coalescing Operator (??) : null, undefined

let val1 

val1 = 5 ?? 10
val1 = null??10
val1 =undefined ?? 15
val1 = null ?? 10 ?? 20

//console.log(val1)

//Terniary Operation
// condition ? true :false

const age = 8
age>=18 ? console.log("you can vote") : console.log("you can not vote")