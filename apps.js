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
<<<<<<< HEAD
            window.location.replace("http://127.0.0.1:5500/loggedin.html");
=======
            window.location.replace("https://google.com");
            // 'Return true' helps to only return the successful login and leave out the other results. 
>>>>>>> 46d3bedf8b46a66ba91f8714f95406f6771f08aa
            return true;
        }
    }
    document.getElementById("loginResult").innerHTML = "Login Failed";
console.log("Button is clicked");
};

// create a counter which only gives you three attempts


  

