
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username:${this.username}`);
        
    }
}


class Student extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    doneAssignment(){
        console.log(`${this.username} completed all Assignments.`);
    }        
}


const firstStudent = new Student("Khushi", "qwerty@gmail.com", "123xyz")

firstStudent.doneAssignment()


console.log(firstStudent instanceof Student);
console.log(firstStudent instanceof User);

