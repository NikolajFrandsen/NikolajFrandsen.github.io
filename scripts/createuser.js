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
submit.onclick = function () {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password) {
            window.location.replace("index.html");
            // 'Return true' helps to only return the successful login and leave out the other results.
            return true;
        }
        console.log("Button is clicked");
    };

    // Our login function should also have a counter. 
    // We move our counter out of the 'for' loop, but keep it inside the function. 

    if (loginAttempts == 1) {
        document.getElementById("loginResult").innerHTML = "No more login attempts";
    } else {
        loginAttempts--;
        document.getElementById("loginResult").innerHTML = ("Only" + " " + loginAttempts + " " + "login attempts left");
        if (loginAttempts == 1) {
            //TODO: Den disabler ikke, dette skal fixes!!
            document.getElementById(username).disabled = true;
            document.getElementById(password).disabled = true;
            submit.disabled = true;
        }
        return false;
    }
};


 class User {
     constructor(username, password, birthDay){
         this.username = username;
         this.password = password;
         this.birthDay = birthDay;
     }

     calculateAge(){
        
     }
 }

// Skal slettes?
 var adr = "Amagerbrogade 232, 21, 2300 KBH";
 var adr = "Newmarket Str. 89, NH8983, New Hamshire"

// CREATE NEW USER
function registerUser() {

    //Retrieve information from input fields

    var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value

    //Create new variable which we can push to our object. 

    var newUser = new User(registerUser, registerPassword);

    var newUser = {
        userName: registerUser,
        password: registerPassword
    }

    // Make sure the username is not taken

    for (i = 0; i < objPeople.length; i++) {
        if (registerUser == objPeople[i].username) {
            document.getElementById("checkUsername").innerHTML = ("That username already exists")
            return

            //Check password length

        } else if (registerPassword.length < 8) {
            document.getElementById("checkPassword").innerHTML = ("Your password is too short")
            return
        }
    }

    // Push new user to our object in the top

    objPeople.push(newUser)

    localStorage.setItem("users", JSON.stringify(objPeople));

    console.log(objPeople)
}
//TODO: REPEAT PASSWORD skal implementeres