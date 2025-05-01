
class User{
    constructor(username){
        this.username = username
    }

    printMe(){
        console.log(`Username:${this.username}`);
        
    }
   
    //avoid access
    static createId(){
        return 'UniqueID:56544564'
    }
}

const newUser = new User("khushi")
newUser.printMe()
//console.log(newUser.createId())



class Student extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const newStudent = new Student("legendKS","qwerty@yahoo.com")
//console.log(newStudent.createId()); //not accessible 
