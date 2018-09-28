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

submit.onclick = function (){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            window.location.replace("loggedin.html");
            // 'Return true' helps to only return the successful login and leave out the other results. In other words, it jumps outside the function. 
            return true;
        }
    }
    document.getElementById("loginResult").innerHTML = "Login Failed";
console.log("Button is clicked");
};

// create a counter which only gives you three attempts


  

