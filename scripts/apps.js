document.getElementById("genericHeader").innerHTML =
    "<span id='headerText'>SpotFinder</span>"
    + "<span id='headerSubtext'>Find your next holiday location </span>";
document.getElementById("genericNav").innerHTML =
    "<ul id='navLinks'>"
    + "<li><a href='#'> Home </a></li>"
    + "<li><a href='#'> Blog </a></li>"
    + "<li><a href='#'> Spots </a></li>"
    + "<li><a href='#'> About </a></li>"
    + "</ul>";
document.getElementById('genericFooter').innerHTML =
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
var spots = document.getElementsByClassName('spot-info');

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
// The Filters -- it is the samme loop for every filter
var pictureClass = document.getElementsByClassName('picture');
var beginnerLevel = document.getElementById("levelBeginner");

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

var intermediateLevel = document.getElementById("levelIntermediate");
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

//Define break type
var breakBeach = document.getElementById("beachBreak");

breakBeach.addEventListener("click", function (beachFunc) {
    var filterBeach = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elBeach = spots[i].getElementsByTagName("article")[0];
        var testBeach = elBeach.getAttribute('reefType');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testBeach != filterBeach) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

var breakReef = document.getElementById("reefBreak");
breakReef.addEventListener("click", function (reefFunc) {
    var filterReef = this.getAttribute("reefType");

    for (i = 0; i < spots.length; i++) {
        var elReef = spots[i].getElementsByTagName("article")[0];
        var testReef = elReef.getAttribute('reefType');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testReef != filterReef) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

var breakPoint = document.getElementById("pointBreak");
breakPoint.addEventListener("click", function (beachFunc) {
    var filterPoint = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elPoint = spots[i].getElementsByTagName("article")[0];
        var testPoint = elPoint.getAttribute('data-country');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testPoint != filterPoint) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});


//Define country filter

var denmarkCountry = document.getElementById("countryDenmark");

denmarkCountry.addEventListener("click", function (dkFunc) {
    var filterDk = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elDk = spots[i].getElementsByTagName("article")[0];
        var testDk = elDk.getAttribute('data-country');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testDk != filterDk) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

var spainCountry = document.getElementById("countrySpain");

spainCountry.addEventListener("click", function (spaFunc) {
    var filterSp = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elSp = spots[i].getElementsByTagName("article")[0];
        var testSp = elSp.getAttribute('data-country');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testSp != filterSp) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

var portugalCountry = document.getElementById("countryPortugal");
portugalCountry.addEventListener("click", function (porFunc) {
    var filterPt = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elPt = spots[i].getElementsByTagName("article")[0];
        var testPt = elPt.getAttribute('data-country');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testPt != filterPt) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
});

var franceCountry = document.getElementById("countryFrance");
franceCountry.addEventListener("click", function (fraFunc) {
    var filterFr = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elFr = spots[i].getElementsByTagName("article")[0];
        var testFr = elFr.getAttribute('data-country');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testFr != filterFr) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
            return emptyList.push(this.id);
        }
    }
});

var norwayCountry = document.getElementById("countryNorway");
norwayCountry.addEventListener("click", function (norFunc) {
    var filterNr = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elNr = spots[i].getElementsByTagName("article")[0];
        var testNr = elNr.getAttribute('data-country');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testNr != filterNr) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
            console.log(this.id)
            return emptyList.push(this.id);
        }
    }
});


// creating an input, which registers everytime a key is pressed and put that value into an array, 
//so that you can apply multiple filters in the filtering section

var emptyList = [];

function filteringList() {
    for (var i = 0; i < emptyList.length; i++) {
        if (emptyList[i].value === 5) {
            emptyList.splice(i, 1);
        }
    }
};