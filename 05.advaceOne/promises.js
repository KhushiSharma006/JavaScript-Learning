/*PROMISE:The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
*/

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

/*NOTE: suppose you request from a promise and throw an error 404, then that request is always found as Response.*/



//----METHOD 1-----
// create promise
const promiseOne = new Promise(function(reslove,reject){
    //do an asyn task
    //eg:DB calls, cryptography,network
    setTimeout(function()
    {
        console.log(`Async task completed`);
        reslove() //connected to .then 
    }, 1000)
})

//promise consumption(all values returns here)
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})


// ----METHOD 2---
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async2 resolved");
  
})



//------------------------------------

const promiseThree =  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({usename:"khushi", gameID:"legendKS"})  //resolve passes all values to .then

    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


//---------------------------------------
//Chaining
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  //chech with 'true'/'false'
        if(!error){
            resolve({usename:"khushi", ID:"legendKS006"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.usename //this value is passed to next .then
}).then((usename) => {
    console.log(usename);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected."))


//++++++++++++++++++++++++++++++++++++++++

const promiseFive =  new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //chech with 'true'/'false'
        if(!error){
            resolve({usename:"khushi", pass:"qwerty123"})
        }else{
            reject('ERROR: some error occured')
        }
    },1000)
})


// async await can't handle errors directly wihtout try catch
async function consumePromiseFive( ) {
   try{
    const response = await promiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }   
}

consumePromiseFive()




//+++++++++++++++++++++++++++++++++++++++++++++

//FETCH:

fetch('https://api.github.com/users/KhushiSharma006')
.then((response) =>{
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error)
)

//NOTE: here the values from fetch is printed first, this is because fetch has micro-task/fetch/priority queue
//  which has highest priority(fast) than the task queus int he call stack