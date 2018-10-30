document.getElementById("genericHeader").innerHTML =
    "<span id='headerText'>SpotFinder</span>"
    + " " + "<span id='headerSubtext'>Find your next holiday location </span>";
document.getElementById("genericNav").innerHTML =
    "<ul id='navLinks'>"
    + "<li><a href='index.html'> Home </a></li>"
    + "<li><a href='#'> Blog </a></li>"
    + "<li><a href='bucketlist.html'> Bucket List </a></li>"
    + "<li><a href='createuser.html'> Sign up / Login </a></li>"
    + "</ul>";
document.getElementById('genericFooter').innerHTML =
    "<span id='headerText'>Want to learn more about us?</span>"
    + " " + "<span id='headerSubtext'>Contact us</span>";


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
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
            }
        }
    }
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
});

//Define break type
var breakBeach = document.getElementById("beachBreak");

breakBeach.addEventListener("click", function (beachFunc) {
    var filterBeach = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elBeach = spots[i].getElementsByTagName("article")[0];
        var testBeach = elBeach.getAttribute('data-reefType');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testBeach != filterBeach) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
});

var breakReef = document.getElementById("reefBreak");
breakReef.addEventListener("click", function (reefFunc) {
    var filterReef = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elReef = spots[i].getElementsByTagName("article")[0];
        var testReef = elReef.getAttribute('data-reefType');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testReef != filterReef) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
});

var breakPoint = document.getElementById("pointBreak");
breakPoint.addEventListener("click", function (beachFunc) {
    var filterPoint = this.getAttribute("data-value");

    for (i = 0; i < spots.length; i++) {
        var elPoint = spots[i].getElementsByTagName("article")[0];
        var testPoint = elPoint.getAttribute('data-reefType');
        spots[i].style.display = "";
        pictureClass[i].style.display = ""; {
            if (testPoint != filterPoint) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
            }
        }
    }
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
        }
    }
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
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
        }
    }
    console.log(this.id);
    if (emptyList.includes(this.id)) {
        return false
    }
    else {
        return emptyList.push(this.id)
    };
});


// creating an input, which registers everytime a key is pressed and put that value into an array, 
//so that you can apply multiple filters in the filtering section

// Empty list allowing you to push the ID of latest clicks into an array
var emptyList = [];

//This function will store the three latest clicks in an array and remove the oldest once a new click has been made.
var clickedButton = document.getElementsByClassName("btnfilter btn-primary");
for (var i = 0; i < clickedButton.length; i++) {
    clickedButton[i].addEventListener("click", function (buttonFunc) {
        for (c = 0; c < clickedButton.length; c++) {
            if (emptyList.length == 4) {
                emptyList.splice(c--, 1)
            }
            console.log(emptyList);
            return console.log(clickedButton[c]);
        }
    })

};

// Filtering for Level this works but won't allow other filters :(
/* for (var b=0; b<clickedButton.length;b++) {
    clickedButton[b].addEventListener("click", function () {
        var filterValue2 = this.getAttribute("data-value");

        for (i = 0; i < spots.length; i++) {
            var el = spots[i].getElementsByTagName("article")[0];
            var testInt = el.getAttribute('data-level');
            spots[i].style.display = "";
            pictureClass[i].style.display = "";
            console.log(testInt);
                if (testInt != filterValue2) {
                    spots[i].style.display = "none";
                    pictureClass[i].style.display = "none";
                    //document.getElementById("button").innerHTML = "dfnsdjf"
                }
        }
        return emptyList.push(this.id);
    })
}; */


//Next level filtering for ReefType

//Advanced filtering for countries
//var clickedButton2 = document.getElementsByClassName("btnfilter btn-primary");
/* for (var b=0; b<clickedButton2.length;b++) {clickedButton2[b].addEventListener("click", function (click2Func) {
   var filterValue2 = this.getAttribute("data-value");

   for (i = 0; i < spots.length; i++) {
       var el = spots[i].getElementsByTagName("article")[0];
       var testInt = el.getAttribute('data-country');
       spots[i].style.display = "";
       pictureClass[i].style.display = "";
       console.log(testInt); {
           if (testInt != filterValue2) {
               spots[i].style.display = "none";
               pictureClass[i].style.display = "none";
           }
       }
   }
   return emptyList.push(this.id);
})
};
*/

//BUCKET LIST FUNCTION

var emptyBucket = JSON.parse(localStorage.getItem("bucketItems"));

if (emptyBucket == null) {
    emptyBucket = [];
} else {
    var emptyBucket = JSON.parse(localStorage.getItem("bucketItems"));
}


var bucketButtonClicked = document.getElementsByClassName("bucketlist-btn");

for (var i = 0; i < bucketButtonClicked.length; i++) {

    bucketButtonClicked[i].addEventListener("click", function (bucketFunc) {
        if (emptyBucket.includes(this.id)) {
            return false
        } else {
            emptyBucket.push(this.id)
            localStorage.setItem("bucketItems", JSON.stringify(emptyBucket));

            console.log(emptyBucket);
            return //console.log(bucketButtonClicked);
        }
    })
}

// Remove Button
var removeButton = document.getElementsByClassName("remove-btn");

for (var i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", function (e) {
        var index = getArrayIndex(this.id);
        emptyBucket.splice(index,1);
        localStorage.setItem('bucketItems', JSON.stringify(emptyBucket));
    })
};

function getArrayIndex(elementID){

    for(i=0; i < emptyBucket.length; i++){
        if(emptyBucket[i] == elementID){
            return i;
        }
    }
}

// Reset-Clear bucketlist
//////var emptyBucket = JSON.parse(localStorage.getItem("bucketItems"));

// This has been added directly in the HTML due to reading failure --> see more on loggedin.html
// document.getElementById('showbucketlist').innerHTML = JSON.parse(localStorage.getItem('bucketItems'))