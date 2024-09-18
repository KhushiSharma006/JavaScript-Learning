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