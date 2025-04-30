async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/KhushiSharma006')
        const data = await response.json()
        //data come in string format from api
        //need to use awqit as it takes time to convert string into JSON
        console.log(data);
        
    }catch(error){
        console.log("Error:", error);
        
    }
}
getAllUsers()


