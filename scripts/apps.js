document.getElementById("genericHeader").innerHTML = 
    "<span id='headerText'>SpotFinder</span>"
    + "<span id='headerSubtext'>Find your next holiday location </span>";
document.getElementById("genericNav").innerHTML = 
    "<ul id='navLinks'>"
    + "<li><a href='#'> Home </a></li>"
    +"<li><a href='#'> Blog </a></li>"
    +"<li><a href='#'> Spots </a></li>"
    +"<li><a href='#'> About </a></li>"
    + "</ul>";
document.getElementById('genericFooter').innerHTML=
    "<span id='headerText'>Want to learn more about us?</span>"
    + "<span id='headerSubtext'>Contact us</span>";
    
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
        if (loginAttempts == 0) {
            document.getElementById(username).disabled = true;
            document.getElementById(password).disabled = true;
            submit.disabled = true;
        }
        return false;
    }
};

// CREATE NEW USER
function registerUser() {

    //Retrieve information from input fields

    var registerUser = document.getElementById("newUser").value
    var registerPassword = document.getElementById("newPassword").value

    //Create new variable which we can push to our object. 

    var newUser = {
        username: registerUser,
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

//Filter funktion --> TODO den filterer kun manuelt, kan dette automatiseres, lave for de kategorier --> lige nu er det kun level 
// Show All --> work on the show all function, definerer spots? + loop funktion --> denne funktion virker ikke :(
var showAll = document.getElementById("showAll");
spots = document.getElementsByClassName('spot-info');

showAll.addEventListener("click", function (obj) {
    //spots = document.getElementsByClassName('spot-info');
    filterValueAll = this.getAttribute("data-value")
    x = document.getElementsByClassName('picture');
    for (i = 0; i < spots.length; i++) {
        if (x[i]) {
            x[i].style.display = "";
            spots[i].style.display = "";
        }
    }
});
var beginnerLevel = document.getElementById("levelBeginner");
var intermediateLevel = document.getElementById("levelIntermediate");
var pictureClass = document.getElementsByClassName('picture');

beginnerLevel.addEventListener("click", function (beginFunc) {
    // Access buttons data value
    var filterBegin = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        // Defining the article which obtains the data about our locations
        var elBegin = spots[i].getElementsByTagName("article")[0];
        // Getting the surfing level data so we can create an if statement to match button pressed with surf level for each location
        var testBegin = elBegin.getAttribute('data-level');
        spots[i].style.display = "";
        pictureClass[i].style.display = "";
        if (testBegin != filterBegin) {
            //If the test is not equal to our filter, then the function will hide the spot.
            spots[i].style.display = "none";
            pictureClass[i].style.display = "none";
        }
    }
});

intermediateLevel.addEventListener("click", function (intFunc) {
    var filterValue2 = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var el = spots[i].getElementsByTagName("article")[0];
        var testInt = el.getAttribute('data-level');
        spots[i].style.display = "";
        pictureClass[i].style.display = "";
        console.log(testInt); {
            if (testInt != filterValue2) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                //document.getElementById("button").innerHTML = "dfnsdjf"
            }
        }
    }
});

var proLevel = document.getElementById("levelPro");

proLevel.addEventListener("click", function (proFunc) {
    var filterValue3 = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var el2 = spots[i].getElementsByTagName("article")[0];
        var testPro = el2.getAttribute('data-level');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testPro != filterValue3) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

//This doesn't work remember to readjust the code in the HTML 
var charBreak = document.getElementById("breakChar");

charBreak.addEventListener("click", function (breakChar) {
    var filterValue4 = this.getAttribute("data-value");
    console.log(el3);

    for (i = 0; i < spots.length; i++) {
        var el3 = spots[i].getElementsByTagName("article")[1];
        var testBreak = el3.getAttribute('data-level'); {
            if (testBreak != filterValue4) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

// Dette skal fixes

var denmarkCountry = document.getElementById("countryDenmark");

denmarkCountry.addEventListener("click", function (dkFunc) {
    var filterDk = this.getAttribute("data-value");
    var spots = this.getElementsByClassName("spot-info");

    for (i = 0; i < spots.length; i++) {
        var elDk = spots[i].getElementsByTagName("article")[2];
        var testDk = elDk.getAttribute('data-level');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testDk != filterDk) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

//Define filter for each country --> currently it doesn't workfor each countr
var spainCountry = document.getElementById("countrySpain");
var portugalCountry = document.getElementById("countryPortugal");
var franceCountry = document.getElementById("countryFrance");
var norwayCountry = document.getElementById("countryNorway");

//Highlight pressed button Not sure what i did but it works....

