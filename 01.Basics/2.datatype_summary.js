 /*
 DATA TYPES:
 1. Primitive(Exact copy passes): 7 types- String, Number, Boolean, null, undefined, Symbol, BigInt
 2. Non_primitive(Reference): Array, Objects, Functions
     return type : object)
                        
 */

 const id1 = Symbol('123')
 const id2 = Symbol('123')
 //console.log(id1 == id2); 
 //o/p: false


////////2.REFERENCE DATA TYPE ////////
 const heros = ["Superman", "Ironman", "Batman","Spiderman"];

 let myObj  = {
    name : "Khushi",
    age: 18,
    city: "Lucknow",
 }


 //Function: function(){}

 const myFunc = function(){
    console.log("Hello I am a Function.")
 }

 console.log(heros)
 console.log(myObj)
 console.log(myFunc())


 // Memory used:1. Stack=> Primitive,(return copy of var )
 //             2. Heap=>Non-primitive (returns reference)=>(changes directly applied to original value) 
   