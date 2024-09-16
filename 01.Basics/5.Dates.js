 

 let myDate = new Date();

 //imp
 console.log(typeof(myDate));
 
 console.log(myDate.toString());
 console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
 console.log(myDate.toLocaleTimeString());
 console.log(myDate.toTimeString());

 let myNewDate = new Date("03-02-2025")
 console.log(myNewDate.getTime());
 console.log(myNewDate.getMonth()+1);
 console.log(myNewDate.getDay());


 //------Time------
let timeStamp = Date.now();
console.log(timeStamp); 

