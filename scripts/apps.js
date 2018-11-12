

//Creating variables which can save the filtering preferences of a user
// making it possible to filter on more than one aspect
var level = "";
var reef = "";
var country = "";

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


document.getElementsByClassName("google-maps");
document.getElementById("map");

function myMap() {
    // Map options
    var options = {
        zoom: 3,
        center: {lat: 57.72093, lng: 10.58394}
    }
    // New map
    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    addMarker({
        coordinates: {lat:39.355,lng:-9.381},
        content:'Supertubos',
        txt: 'Peniche, Portugal'
    });

     addMarker({
        coordinates: {lat:38.988, lng:-9.421},
        content:'World Surf Reserve',
        txt: 'Ericeira, Portugal'
    });

    addMarker({
        coordinates: {lat:38.697, lng:-9.421},
        content:'Consistent surf close to Lisbon',
        txt: 'Cascais, Portugal'
    });

    addMarker({
        coordinates: {lat:68.333, lng:14.666},
        content:'Ice cold surf in the north',
        txt: 'Lofoten, Norway'
    });

    addMarker({
        coordinates: {lat:56.953, lng:8.382},
        content:'Cold water surf on the west coast of Jutland',
        txt: 'Voruper, Denmark'
    });

    addMarker({
        coordinates: {lat:39.602, lng:-9.068}, 
        content:'Here you find the biggest wave in the world',
        txt: 'Nazaré, Portugal'
    });

    addMarker({
        coordinates: {lat:57.081, lng:8.545},
        content:'Cold Hawaii',
        txt: 'Klitmoeller, Denmark'
    });

    addMarker({
        coordinates: {lat:43.284, lng:-2.169},
        content: 'Spaaaaain',
        txt: 'Zarautz, Spain'
    });

    addMarker({
        coordinates: {lat:43.66933781, lng:-1.44266238},
        content: 'Fraaaaance',
        txt: 'Hossegor, France'

    })

    //Add marker function
    function addMarker(info){
        var marker = new google.maps.Marker({
        position:info.coordinates,
        map:map,
        title: info.txt,
        // Adding custom markers
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
    
    // Adding the description of the spots
    var infoWindow = new google.maps.InfoWindow({
        content:info.content
    });

    marker.addListener('click', function(){
        infoWindow.open(map,marker);
    });   
}
}


//Getting the spot info from the HTML
var spots = document.getElementsByClassName('spot-info');

// This variable is used for which photos to hide and show when filtering 
var pictureClass = document.getElementsByClassName('picture');

// This one is used to hide the add and remove to/from bucket list button when filtering
var hideBkt = document.getElementsByClassName("middle");

//Create class and constructor structure which will be used for our filtering function
class Surfspot {
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
        }else if (whichType =="country"){
            country = whichBtn;
        } else {
            showall=whichBtn
        }
        console.log(whichBtn);
        
        for (i = 0; i < spots.length; i++) {
            var el = spots[i].getElementsByTagName("article")[0];
            var filterSurfspot = new Surfspot(el.getAttribute('id'), el.getAttribute('data-level'), el.getAttribute('data-reefType'), el.getAttribute('data-country'));
            
            //Start by showing all the options, then later the non-matching spots will be hidden. Hides both the spot photo and text + the add/remove to bucketlist
            spots[i].style.display = "";
            pictureClass[i].style.display = "";
            hideBkt[i].style.display = "";
        
            // For the level buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (whichType == "showall") {
                spots[i].style.display = "";
                pictureClass[i].style.display = "";
                hideBkt[i].style.display = "";
                continue
            }   

            if (filterSurfspot.level !== level && level != "") {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                hideBkt[i].style.display = "none";
                continue;
            }

            // For the type buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (filterSurfspot.reefType !== reef && reef != "") {
                spots[i].style.display = "none";
                pictureClass[i].style.display = "none";
                hideBkt[i].style.display = "none";
                continue;                    
            }
            
            // For the country buttons, if the location attributes does not match the chosen filter, then the location will be hidden.
            if (filterSurfspot.country != country && country != "") {
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

// Check if there are values in emptyBucket. If not create new empty array.
// This is to prevent the program from creating a new empty array every time.
if (emptyBucket == null) {
    emptyBucket = [];
} else {
    emptyBucket;
}

// Bind a value to the button in HTML
var bucketButtonClicked = document.getElementsByClassName("bucketlist-btn");

// Loop through our buttons to check which spot is clicked.
for (var i = 0; i < bucketButtonClicked.length; i++) {

// Check if the bucket item is already in the bucket, else push the new item to the bucket. 
    bucketButtonClicked[i].addEventListener("click", function () {
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

// Bind a value to the remove button from HTML
var removeButton = document.getElementsByClassName("remove-btn");

// Loop through the button clicked. 
for (var i = 0; i < removeButton.length; i++) {

    // Check which button is clicked. 
    removeButton[i].addEventListener("click", function (e) {
        var index = getArrayIndex(this.id);

        // Remove from the list. 
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