// ES6


class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password =password 
    }

    encryptPassword(){
        return `${this.password}xyz`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("khushi","abc.12@gmail.com", "qwerty123")

console.log(newUser.encryptPassword());
console.log(newUser.changeUserName());



//----------------
// behind the scene
/*
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("legend", "KS656gmail.com", "123abc")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

*/


