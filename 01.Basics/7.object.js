

//singlton ->Constructor method
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
//console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

//to freeze the object
//Object.freeze(jsUser)
//jsUser.name = "legendKS"//this modification can't be done as object is freezed

/*
jsUser.greet = function(){
    console.log("Hello JS user");
}*/

jsUser.greet = function(){
    console.log(`Hello JS user,${this.name}`);
}

//console.log(jsUser.greet());

const regularUser ={
    email : "abc@email.com",
    fullname:{
        name:"Khushi",
        surname:"Vishwakarma"
    }
};

//console.log(regularUser.fullname?.surname);
 const obj1 ={1:"a", 2:"b"}
 const obj2 ={3:"c", 4:"d"}

 //const obj3 ={obj1 , obj2};
 const obj3 = Object.assign({}, obj1, obj2);
 //const obj3 = {...obj1 , ...obj2};

 //console.log(obj3);

 ///Array of object
 const users = [
    {
        id:1,
        email:"KS@gmail.com"
    },
    {
        id:2,
        email:"AS@gmail.com"
    },
    {
        id:3,
        email:"DS@gmail.com"
    },
    {
        id:4,
        email:"SS@gmail.com"
    }
 ]
 //console.log(users[0].email);


 //const tinderUser = new Object()
 const tinderUser = {}

 tinderUser.id = "legend006"
 tinderUser.name = "qwerty"
 tinderUser.isLoggedIn = true

 //console.log(tinderUser);
 //console.log(Object.keys(tinderUser)); //return in array
 //console.log(Object.values(tinderUser));
 //console.log(Object.entries(tinderUser));

 //to check property exist or not
 //console.log(tinderUser.hasOwnProperty('isLogged'));


// --------Destructuring of Object-------

const course = {
    coursename:"JS in 7 days",
    price:"your time",
    courseInstructor:"Code aur Chai"
}

const {courseInstructor : instructor} = course
console.log(instructor);;

 