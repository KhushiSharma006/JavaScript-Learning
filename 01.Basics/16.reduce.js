const nums = [1,2,3,4,5]

//sum of nums = 15
const total = nums.reduce(function(acc, currVal) {
    //console.log(`acc;${acc}, currVal:${currVal}`);
    
    return acc+currVal;
}, 0)
//console.log(total)


// reduce method with Arrao function'
const myTotal = nums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal)
