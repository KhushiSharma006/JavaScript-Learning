
//------------ for of Loop-------------

const greetings = "Hello World!"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}


//map => contains unique element

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("UK", "United Kingdom")
map.set("IN", "India")

//console.log(map)
/*
for (const [key,value] of map) {
    console.log(key, ':' , value);
}
*/


const myObj = {
    game1:"BGMI",
    game2 :"GOT"
}

/*
/// for of loop can not iterate over a object
for (const [key, value] of myObj) {
    console.log(key, ':' , value);   
}
*/


//-------------forin loop -------------

//in object
for (const key in myObj) {
    //console.log(`${key}:${myObj[key]}`);
        
}

//in array
const prog = ["html", "css", "js"];
for (const key in prog) {
      //console.log(key);        // in for in loop key will return keys (indexes) of an array
      //console.log(prog[key]);
 }

/*
 //in map => non iterable 

 for (const key in map) {
    console.log(key);
 }
    */

 //---------------## For each loop ##----------------
  
//  prog.forEach( function(val){
//     console.log(val);
//  } )

//  prog.forEach((item) => {
//     console.log(item);
//  })

//  function printMe(item){
//     console.log(item);
//  }
//  prog.forEach(printMe);

// prog.forEach(( item, index, arr)=>{
//         console.log(item, index, arr);
// } )


/*
//iteration over array of object

const familyGamer = [
    {
        game : "BGMI",
        player:"legendKS"

    },
    {
        game : "GOT",
        player:"timujin"

    },
    {
        game : "COC",
        player:"#qjoyj2c2c"

    }
]

familyGamer.forEach( (item) =>{
    console.log(item.player)
})
    */


// for each loop does not return any value (even storing in another var or using return)

/*
const values =  prog.forEach( (item)=>{
    return item;
})
console.log(values);
*/

// but filter can
const nums = [1,2,3,4,5,6,7,8,9,10]

//const numValues = nums.filter((num) => num>4)
//or
/*const numValues = nums.filter((num) =>{
    return num>4})
 */
// console.log(numValues);

/*
//using map
const numValues = nums.map( (num) => { return num+10})    
console.log(numValues);
*/

//---------------chaining---------
 
const numValues = nums
                      .map( (num) => num*10 )
                      .map( (num) => num+1)
                      .filter( (num) =>num>=40)

console.log(numValues);
