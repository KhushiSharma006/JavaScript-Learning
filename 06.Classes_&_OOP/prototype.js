 /* Prototype Inheritance
   Array,Sting,Function---------->Object----------->null
 */


let myHeros = ["Thor","Ironman"]

let heroPower = {
    Thor : "hammer",
    Ironman: "suit",

    getThorPower: function(){
        console.log(`Thor power is ${this.Thor}`)
    }
}

// new properties are add to Object(high heirarchy)  which is passed to Array, String (low heirarchy)etc
Object.prototype.legendKS = function(){
    console.log("legend powers are present in all object."); 
}

heroPower.legendKS()
myHeros.legendKS()//array can access properties of Object

//
Array.prototype.heySuperheroes =  function(){
    console.log(`Welcome to Avengers`);
    
}

myHeros.heySuperheroes()
//heroPower.heySuperheroes()// object cant access properties of Array


//--------------Inheritance--------

const User = {
    name:"khushi",
    email:"abc@yahoo.com"
}

const Teacher = {
    createVideo : true
}

const teachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment:"JS assignment",
    isPaid: true,
    __proto__: teachingSupport//use to link 2 Object Instances
}

Teacher.__proto__ = User


///Modern Syntax 
//setPrototupeOF:Sets the prototype of a specified object o to object proto or null. Returns the object o.
Object.setPrototypeOf(teachingSupport,Teacher)


//---------------------------------------------------------

/* GOAL: to defina a method which gives the true length(by removing spaces) of a String 
let myName = "Khushi    "

console.log(myName.length);//10
console.log(myName.truelength());
*/

//Solution:
let anotherUsername = "legend    "

String.prototype.trueLength = function(){
    console.log(`${this.name}`);//legend
    console.log(`True lenght of string is: ${this.trim().length}`);   
}

anotherUsername.trueLength()

"khushiS ".trueLength() 