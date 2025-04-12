
"use strict" ; // treat all JS code as newer  version  

console.log("Hey! What's up guys.")

// ---------------Variables--------------

const a = 5.5
let b = "abc"
var c = 464646 ;// dont use because of issue in block scope and functional scope  (used in older version of JS)
let d;    //typeof(d)=undefined
let e = null; //typeof(e)=object

//console.table([a,b,c,d,e])

//---------------DATA TYPES------------

/*
Number (Range in memory address: 2 to power 53)
bigint  
string:" " or ' '
boolean: true/false
null: standalone value =>representation of null value (eg: temparature can not be 0 or undefined , therefor we use null)
undefined:
symbol :unique (will be used in react , figma etc)
*/

//console.log(typeof(d))
//console.log(typeof e)

//----------Conversion Operation----------

let valInNum = Number(b)
//console.log(typeof(valInNum));
//console.log(valInNum); 

/* 
  "545" => 545
  "545dfd" => NaN
  true <=>1
  false<=> 0
  "" => false
  "khushi" => true
 */


//-----------Operation----------------

 let s1 = "Khu"
 let s2 = "shi"
 let s3 = s1+s2;
 console.log(s3); 
 
 console.log(1+"2")  
  console.log("1"+2)
 console.log("1"+2+3)
 console.log(1+2+"3")

 /*Output:
 Khushi
12
12
123
33
 */

//Prefix and Postfix form mdn docx


 //---------Comparision-------
 /*AVOID THESE COMPARISION*/
////###Alert (Comparision b/w different data types)
 //console.log(null > 0)
 //console.log(null == 0)
 //console.log(null >= 0)

 /*The reason is that an equality check == and comparison >,<, >= ,<= works differently.
   Comparisons convert null to a num, treating it as 0.
   That's why null >= 0  is true and null > 0 is false. */


   //console.log(undefined == 0);
   //console.log(undefined > 0);
   //console.log(undefined < 0);
   //O/P : false


   /// Strict Check (===)
   // it checks value with the datatype

   console.log("2"==2);
   console.log("2"===2); 

   /* Output:
   true
   false */
