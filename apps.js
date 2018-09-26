var submit = document.getElementById('submit');

var objPeople = [
    {
        username: "Frederik",
        password: "123"
    },
    {
        username: "Martin",
        password: "1234"
    },
    {
        username: "Nikolaj",
        password: "12345"
    }
]

function getInfo(){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            window.location.replace("http://127.0.0.1:5500/loggedin.html");
            return true;
        }
    }
    document.getElementById("loginResult").innerHTML = "Login Failed";
console.log("Button is clicked");
};



  

