//Immediately Invoked Function XPathExpression (IIFE) : used to avoid the pollution from the global scope variables
//(funcDef)(funcCall)

(function greet(){
    console.log(`Hello JS learner`);
})();//semicolon is necessary 


//named IIFE
(function one(){
    console.log("Unnamed IIFE")
})();

//unnamed IIFE
((name) => {
    console.log(`named IIFE with parameter -${name}`);
})('khushi');