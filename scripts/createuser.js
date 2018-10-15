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

    // Make sure the username is not taken. 

    for (i = 0; i < objPeople.length;i++){
        if(registerUser == objPeople[i].username){
            alert("that username is already in use")
            return

    //Check password length

    } else if (registerPassword.length < 8) {
            alert("That password is too short")
            return
        }
    }

    // Push new user to our object in the top.  

    objPeople.push(newUser)
    console.log(objPeople)
}

var addToLocalStorageObject = function (objPeople, newUser, value){
    var existing = localStorage.getItem(objPeople);
    existing = existing ? JSON.parse(existing) : {};
    existing[newUser] = value; 
    localStorage.setItem(objPeople, JSON.stringify(existing));

};

// var existing = localStorage.getItem(objPeople);
// existing = existing ? JSON.parse(existing):{};
// existing['username'] = newUser;
// localStorage.setItem('objPeople', JSON.stringify(existing));
