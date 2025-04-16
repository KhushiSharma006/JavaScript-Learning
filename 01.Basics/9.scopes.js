
//inner funtion can access the variables from outer funtion but outer funtion can not

/*
function one (){
    let num1 = 20
    function two (){
        let num2 =50
        console.log("INNER:num1=",num1)
        console.log("INNER:num2=",num2)
    }
    two()
    console.log("OUTER:num1=",num1);
}
one()
*/

/*
//--------Interesting--------

1.delclaration 1
console.log(addone(4)); // runs fine

function addone(num){
    return num+1
}


2. declaration 2
//console.log(addtwo(4));//cant call function before declaration

const addtwo = function addtwo(num){
    return num+2
}
//console.log(addtwo(4)); //runs fine
*/
