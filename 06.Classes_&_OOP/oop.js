
//Object Literals

const user = {
    username:"khushi",
    pass:"abc123",
    signedIn: true,

    getUserDetails: function(){
        console.log("user details are accessed");
        
        console.log(`Username:${this.username}`);
        console.log(this);//all values
        
        
    }
}

console.log(user.username)
user.getUserDetails()
console.log(this);//empty

//in browser: this gives an Window Object



//------ Constructor Function:-------
// multiple instances can be created by sinle object literal
// 'new' keyword creates new contexts
// gives a copy
// E.g.-
//const promiseOne = new Promise()
//const date = new date()

function User(username, age, isLoggedIn){
    //var = parmeterValue
    this.username= username;
    this.age = age;
    this.isLoggedIn = isLoggedIn

    //return this
    //implicitely return is defined(optional to write)
}

/*
const userOne = User("Khushi",18,true)
//const userTwo = User("legendKS",20,false) //values are overwrite
console.log(userOne);*/

//-------------new keyword------------
/* 1. new obj created
   2. constructor function is called(all args are packed) due to new keyword
   3. all args are injected into this
   4. got in method

*/

const userOne =new User("Khushi", 18, true);
const userTwo = new User("Ayush",16, false);
console.log(userOne);
console.log(userTwo);

//Constructor: a reference of itself
console.log(userOne.constructor);
//op:[Function: User]