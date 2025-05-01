
function setUserName(username){
    ///complex DB calls
    this.setUserName = username
    console.log("username()is called");
    
}

function createUser(username,email,password){
    setUserName.call(this, username) //passing the createUser() context to setUserName()

    this.email = email,
    this.password = password
}

const newUser = new createUser("Khushi","abc@gmail.com", "abc123")
console.log(newUser);
