
class User{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}safePass` //create a new property named _password
    }

    set password(value){
        this._password = value.toUpperCase();
    }

}

const newUser = new User("khushi", "abc@gmail.com", "qwerty123")
console.log(newUser.password);
