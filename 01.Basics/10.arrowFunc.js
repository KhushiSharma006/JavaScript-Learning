/*
const user = {
    username:"legendKS",
    age :18,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to Hell`);
        console.log(this); 
    }
}
//this:gives the value in current contest
//---------Interesting--------
// in node environment current contest is an empty object
//in browsers console the current contest is window

user.welcomeMessage()
//current contest is changed
user.username = "Hashira11"
user.age = 15;
user.welcomeMessage()

console.log(this);
*/

//NOTE:"this" can be used in object only

// function one (){
//     let name = "legendKS"
//     console.log(this);
//     console.log(this.name);//"this" is undefined in function scope
// }


// const one = function (){
//     let name = "legendKS"
//     console.log(this);
//     console.log(this.name);//"this" is undefined in function scope
// }

//one()

//--------Arrow Function---------

/*
const arrowFunc =  () => {
    let name = "legendKS"
    console.log(this);
    console.log(this.name);//"this" is undefined in arrow function scope
}
arrowFunc()
*/

/*
const add = (num1, num2) =>{
    return num1+num2
}
 */

//implicit return of arrow function
//const add = (num1, num2) => num1+num2
//or
//const add = (num1, num2) => (num1+num2)
//const add = (num1, num2) => ({name:"khushi"})

//console.log(add(10,20));

