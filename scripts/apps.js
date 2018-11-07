//Creating a generic header, navigation and footer which can be used across different HTML

document.getElementById("genericHeader").innerHTML =
    "<span id='headerText'>SpotFinder</span>"
    + " " + "<span id='headerSubtext'>Find your next holiday location </span>";
document.getElementById("genericNav").innerHTML =
    "<ul id='navLinks'>"
    + "<a id='navBtn' class='btn-primary' href='index.html'> Home </a>"
    + "<a id='navBtn' class='btn-primary' href='#'> Blog </a>"
    + "<a id='navBtn' class='btn-primary' href='bucketlist.html'> Bucket List </a>"
    + "<a id='navBtn' class='btn-primary' href='createuser.html'> Sign up / Login </a>"
    + "</ul>";
document.getElementById('genericFooter').innerHTML =
    "<span id='headerText'>Want to learn more about us?</span>"
    + " " + "<span id='headerSubtext'>Contact us</span>";



// Show All, allows the user to see all spots -> This works seperately from the filter function below
//Getting the button ID
var showAll = document.getElementById("showAll");
//Getting the spot info from the HTML
var spots = document.getElementsByClassName('spot-info');

showAll.addEventListener("click", function (obj) {
    //spots = document.getElementsByClassName('spot-info');
    filterValueAll = this.getAttribute("data-value")
    x = document.getElementsByClassName('picture');
    
    for (i = 0; i < spots.length; i++) {
        //*****Currently it is build as an if statement, it is always x[i] and therefore it'll show all, maybe this can be optimized? ****
        if (x[i]) {
            x[i].style.display = "";
            spots[i].style.display = "";
        }
    }
});
// The Filters -- it is the samme loop for every filter

// This variable is used for which photos to hide and show when filtering 
var pictureClass = document.getElementsByClassName('picture');
// This one is used to hide the add and remove to/from bucket list button when filtering
var hideBkt = document.getElementsByClassName("middle");


//Create class and constructor structure which will be used for our filtering function
class surfSpot {
    constructor(id, level, reefType, country) {
        this.id = id;
        this.level = level;
        this.reefType = reefType;
        this.country = country;
    }
}

// Filter function based on the HTML buttons
var filterBtn = document.getElementsByClassName("btnfilter btn-primary");
//Loop through buttons
for (var b = 0; b < filterBtn.length; b++) {
    // Create event listener to make the buttons active
    filterBtn[b].addEventListener("click", function () {
        var whichBtn = this.getAttribute('data-value');
        //Looping through the different attributes
        
        for (i = 0; i < spots.length; i++) {
            var el = spots[i].getElementsByTagName("article")[0];
            var filterSurfspot = new surfSpot(el.getAttribute('id'), el.getAttribute('data-level'), el.getAttribute('data-reefType'), el.getAttribute('data-country'));
            console.log(filterSurfspot);
            console.log(whichBtn);
            
            //Start by showing all the options, then later the no matched spots will be hidden. Hides both the spot photo and text + the add/remove to bucketlist
            spots[i].style.display = "";
            pictureClass[i].style.display = "";
            hideBkt[i].style.display = "";
           
            // For the level buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (filterSurfspot.level != whichBtn) {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                hideBkt[i].style.display = "none";
            }
        }
    })
};



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
//Tjekker om der er nogle der er værdier i emptybucket hvis ikke lave den et tomt array og ellers så loader den de værdier
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
        emptyBucket.splice(index, 1);
        localStorage.setItem('bucketItems', JSON.stringify(emptyBucket));
    })
};

function getArrayIndex(elementID) {

    for (i = 0; i < emptyBucket.length; i++) {
        if (emptyBucket[i] == elementID) {
            return i;
        }
    }
}

// Reset-Clear bucketlist
//////var emptyBucket = JSON.parse(localStorage.getItem("bucketItems"));

// This has been added directly in the HTML due to reading failure --> see more on loggedin.html
// document.getElementById('showbucketlist').innerHTML = JSON.parse(localStorage.getItem('bucketItems'))