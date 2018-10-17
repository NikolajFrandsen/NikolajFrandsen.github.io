
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

// 0 also counts as an attempt so in this way the user only has 3 attempts to login
var loginAttempts = 2;


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

beginnerLevel.addEventListener("click", function(begin) {
    var spots=document.getElementsByClassName("spot-info");
    var filterBegin = this.getAttribute("data-value");

    for(i=0; i<spots.length;i++) {
        var elBegin=spots[i].getElementsByTagName("article")[0];
        var testBegin = elBegin.getAttribute('data-level');
        if(testBegin != filterBegin) {
            spots[i].style.display="none";
            pictureClass[i].style.display="none";
        }
    }
});

intermediateLevel.addEventListener("click", function(that) { 
    var spots = document.getElementsByClassName("spot-info");

    var filterValue2 = this.getAttribute("data-value");

    for (i=0; i < spots.length;i++) {
        var el = spots[i].getElementsByTagName("article")[0];
        var test2 = el.getAttribute('data-level');
        console.log(test2); {
            if(test2 != filterValue2) {
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
        var test3=el2.getAttribute('data-level'); {
            if(test3 != filterValue3) {
                spots[i].style.display="none";
                pictureClass[i].style.display="none";
            }
        }
    }
});

