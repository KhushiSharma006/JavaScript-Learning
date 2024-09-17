///singltons ->Constructor method
//Object.create

//Object Literals

const mySym = Symbol("key1")

const jsUser ={
    name:"khushi",
    "full name":"khushi sharma",
    [mySym]:"mykey1", // mysym:"mykey1" is of string datatype (Interesting)
    age :18,
    laction:"Kanpur",
    email:"qwerty123@email.com",
    isLoggedIn:false,
    lastLogin :["Mon", "Fri"]

}

//method 1 
//console.log(jsUser);
//console.log(jsUser.email);

//method 2
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

//to freeze the object
//Object.freeze(jsUser)
//jsUser.name = "legendKS"//this modification can't be done as object is freezed


jsUser.greet = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(jsUser.greet());
 