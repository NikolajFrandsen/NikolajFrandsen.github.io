
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
            window.location.replace("loggedin.html");
            // 'Return true' helps to only return the successful login and leave out the other results.
            return true;
        }
        console.log("Button is clicked");
    };

    // Our login function should also have a counter. 
    // We move our counter out of the 'for' loop, but keep it inside the function. 

    if (loginAttempts == 0) {
        document.getElementById("loginResult").innerHTML = "No more login attempts";
    } else {
        loginAttempts--;
        document.getElementById("loginResult").innerHTML = ("Only" + " " + loginAttempts + " " + "login attempts left");
        if (loginAttempts == 0) {
            document.getElementById(username).disabled = true;
            document.getElementById(password).disabled = true;
            submit.disabled = true;
        }
        return false;
    }
};

// CREATE NEW USER
function registerUser(){

    //Retrieve information from input fields

    var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value
    
    //Create new variable which we can push to our object. 
    
    var newUser = {
        username: registerUser,
        password: registerPassword
    }

    // Make sure the username is not taken

    for (i = 0; i < objPeople.length; i++){
        if(registerUser == objPeople[i].username){
                document.getElementById("checkUsername").innerHTML =("That username already exists")
                return

    //Check password length

            } else if (registerPassword.length < 8) {
                document.getElementById("checkPassword").innerHTML =("Your password is too short")
                return
            }
        }

    // Push new user to our object in the top

    objPeople.push(newUser)

    // localStorage.setItem("users", JSON.stringify(objPeople));
    
    console.log(objPeople)
}

//Filter funktion --> TODO den filterer kun manuelt, kan dette automatiseres, lave for de kategorier --> lige nu er det kun level 
// Show All --> work on the show all function, definerer spots? + loop funktion --> denne funktion virker ikke :(
    var showAll = document.getElementById("showAll");
    showAll.addEventListener("click", function (obj) {
        spots = document.getElementsByClassName('spot-info');
        filterValueAll= this.getAttribute("data-value")
        x = document.getElementsByClassName('picture');
        for (i=0;i<spots.length;i++) {
            if(x[i]) {
                x[i].style.display="";
                spots[i].style.display="";
            }
        }
    });
var beginnerLevel = document.getElementById("levelBeginner");
var intermediateLevel = document.getElementById("levelIntermediate");
var pictureClass = document.getElementsByClassName('picture');

beginnerLevel.addEventListener("click", function(beginFunc) {
    // Access the class
    var spots=document.getElementsByClassName("spot-info");
    // Access buttons data value
    var filterBegin = this.getAttribute("data-value");

    for(i=0; i<spots.length;i++) {
        // Defining the article which obtains the data about our locations
        var elBegin=spots[i].getElementsByTagName("article")[0];
        // Getting the surfing level data so we can create an if statement to match button pressed with surf level for each location
        var testBegin = elBegin.getAttribute('data-level');
        if(testBegin != filterBegin) {
            //If the test is not equal to our filter, then the function will hide the spot.
            spots[i].style.display="none";
            pictureClass[i].style.display="none";
        }
    }
});

intermediateLevel.addEventListener("click", function(intFunc) { 
    var spots = document.getElementsByClassName("spot-info");

    var filterValue2 = this.getAttribute("data-value");

    for (i=0; i < spots.length;i++) {
        var el = spots[i].getElementsByTagName("article")[0];
        var testInt = el.getAttribute('data-level');
        console.log(testInt); {
            if(testInt != filterValue2) {
                spots[i].style.display="none";
                pictureClass[i].style.display="none";
            }
        }
    }
});

var proLevel = document.getElementById("levelPro");

proLevel.addEventListener("click", function(proFunc) {
    var spots = document.getElementsByClassName("spot-info");
    var filterValue3 = this.getAttribute("data-value");
    
    for(i=0;i < spots.length;i++) {
        var el2=spots[i].getElementsByTagName("article")[0];
        var testPro=el2.getAttribute('data-level'); {
            if(testPro != filterValue3) {
                spots[i].style.display="none";
                pictureClass[i].style.display="none";
            }
        }
    }
});

