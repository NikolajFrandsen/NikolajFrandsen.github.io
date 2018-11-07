//Creating a generic header, navigation and footer which can be used across different HTML

var level = "";
var reef = "";
var country = "";

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



// *** Currently this doesn't work Show All, allows the user to see all spots -> This works seperately from the filter function below ***
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
        var whichType = this.getAttribute('data-type');
        //Looping through the different attributes

        if(whichType == "level"){
            level = whichBtn;
        }else if(whichType == "reef"){
            reef = whichBtn;
        }else {
            country = whichBtn;
        }
        
        for (i = 0; i < spots.length; i++) {
            var el = spots[i].getElementsByTagName("article")[0];
            var filterSurfspot = new surfSpot(el.getAttribute('id'), el.getAttribute('data-level'), el.getAttribute('data-reefType'), el.getAttribute('data-country'));
            
            //Start by showing all the options, then later the no matched spots will be hidden. Hides both the spot photo and text + the add/remove to bucketlist
            spots[i].style.display = "";
            pictureClass[i].style.display = "";
            hideBkt[i].style.display = "";
        
            // For the level buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (filterSurfspot.level !== level && level !== "") {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                hideBkt[i].style.display = "none";
                continue;
            }

            // For the level buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (filterSurfspot.reefType !== reef && reef !== "") {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                hideBkt[i].style.display = "none";
                continue;                    
            }
            
            // For the level buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (filterSurfspot.country != country && country !== "") {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                hideBkt[i].style.display = "none";
                continue;
            }            
        }
    })
};

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