"use strict" ; // treat all JS code as newer  version  

console.log("Hey! What's up guys.")

// ---------------Variables--------------

const a = 5.5
let b = "abc"
var c = 464646 ;// dont use because of issue in block scope and functional scope  
let d;    //typeof(d)=undefined
let e = null; //typeof(e)=object

//console.table([a,b,c,d,e])

//---------------DATA TYPES------------

/*
Number : 2 to power 
bigint
string:" "
boolean: true/false
null: standalone value
undefined:
symbol :unique
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
 //console.log(s3);
 
 //console.log(1+"2")
 //console.log("1"+2)
 //console.log("1"+2+3)
 //console.log(1+2+"3")

 //---------Comparision-------
////###Alert
 //console.log(null > 0)
 //console.log(null == 0)
 //console.log(null >= 0)

 /*The reason is that an equality check == and comparison >,<, >= ,<= works differently.
   Comparisons convert null to a num, treating it as 0.
   That's why null >= 0  is true and null > 0 is false. */


   /// Strict Check

   console.log("2"==2);
   console.log("2"===2);