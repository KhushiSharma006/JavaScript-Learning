//Can we change the default value od PI?


//cant change directly
//console.log(Math.PI);
//Math.PI = 4
//console.log(Math.PI);



//this property tells some hidden things about Object

const descriptor = Object.getOwnPropertyDescriptors(Math, "PI");
//console.log(descriptor);



const courses = {
    name: "JavaScript in 20 hrs",
    price: "free",
    instructor:"Hitesh Chaudhary",
    student:function(){
       console.log("Student is loggedIn.");
       
    }
}

//console.log(Object.getOwnPropertyDescriptor(courses,"name"));


Object.defineProperty(courses, 'name',{
    writable : false,
    enumerable:false //name cantbr iterable
})


//iteration

for (const [key, value] of Object.entries(courses)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
        
    }
    
}