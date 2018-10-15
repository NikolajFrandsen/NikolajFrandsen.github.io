
// FRONT PAGE: LOGIN 

var submit = document.getElementById('submit');
var resultSpan = document.getElementById('loginResult');


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

var loginAttempts = 3;


//LOGIN FUNCTION 
submit.onclick = function (){
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < objPeople.length; i++){
        if(username == objPeople[i].username && password == objPeople[i].password){
            window.location.replace("loggedin.html");
            // 'Return true' helps to only return the successful login and leave out the other results.
            return true;
        }   
    console.log("Button is clicked");
};

// Our login function should also have a counter. 
// We move our counter out of the 'for' loop, but keep it inside the function. 

if (loginAttempts == 0){
    document.getElementById("loginResult").innerHTML = "No more login attempts";
} else {
    loginAttempts--;
    document.getElementById("loginResult").innerHTML =("Only" + " " + loginAttempts + " " + "login attempts left");
    if (loginAttempts == 0){
        document.getElementById(username).disabled = true;
        document.getElementById(password).disabled = true;
        submit.disabled = true;
        }
        return false;
    }
};


// CREATE NEW USER


// Show Selected filter

///Define Variables --> TODO Adjust ID in html so that there are 3 filters instead of 1
var inputFilter= document.getElementById("sidebarbtn");
var spotGuide = document.getElementById("spotguide");

///Create Function
function filterSelection(element,spotGuide) {
    var element = element.className;
    var spotGuide = document.getElementsByClassName("spot-info");
    for (i = 0; i < spotGuide.length; i++) {
        if(element.indexOf(spotGuide[i]) ==-1) {
            element.className += " " + spotGuide[i];
        }
    console.log(element);
    console.log(spotGuide);
    }
}
// Remove none selected filters