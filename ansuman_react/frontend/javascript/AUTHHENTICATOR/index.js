const admin = {
    username : "ansuman",
    password : "2"
}

const logininputs = document.getElementById("admin-login-form");
const errormessage = document.getElementById("error-message");

logininputs.addEventListener("submit", function(event){
    event.preventDefault()


// to get the entered user name and password we need to get the data from the html page 

const gettheusername = document.getElementById("username").value;
const gettingthepassword = document.getElementById("password").value;

if (gettheusername === admin.username && gettingthepassword === admin.password ){
    
window.location.href ="http://127.0.0.1:5501/frontend/project/AUTHHENTICATOR/gif.html";
    

}
else{
    errormessage.textContent = "Invalid username or password. Please try again."; 
}

})
