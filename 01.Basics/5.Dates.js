//Date() object represent a single moment in a timr in a plateform independent format
// represent in milliseconds since the midnight at the begninning of 1st January 1970 

 let myDate = new Date();

 //imp
 console.log(typeof(myDate)); //object
 
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toLocaleTimeString());//Explore more
 console.log(myDate.toTimeString());

 //Note: month start from 0 in JS
 
 //let myNewDate = new Date(2025,0,6)
 let myNewDate = new Date("03-02-2025")
 console.log(myNewDate.getTime());
 console.log(myNewDate.getMonth()+1);
 console.log(myNewDate.getDay());


 //------Time------
let timeStamp = Date.now();//op is in millisecond
console.log(timeStamp); 

//** to convert into second 
//Math.round((Date.now()/1000));

