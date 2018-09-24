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
            alert("Login successful");
            return true;
        }
    }
    alert("Wrong username and/or password") 
console.log("Button is clicked");
};



  

