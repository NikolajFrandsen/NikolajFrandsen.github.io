// FRONT PAGE: LOGIN 

class User {
    constructor(firstname, lastname, username, email, birthDate, password){
        this.firstname = firstname;
        this.lastname = lastname; 
        this.username = username;
        this.email = email;
        this.birthDate = birthDate;
        this.password = this.hashPassword(password);
        //this.lastAccess = null;
    }

    setLastAccess(){
       this.lastAccess = Date.now();
    }

    // Hash function from Henrik's example
    hashPassword(rawPassword){
        var a = 1, c = 0, h, o;
        if (rawPassword) {
          a = 0;
          /*jshint plusplus:false bitwise:false*/
          for (h = rawPassword.length - 1; h >= 0; h--) {
            o = rawPassword.charCodeAt(h);
            a = (a<<6&268435455) + o + (o<<14);
            c = a & 266338304;
            a = c!==0?a^c>>21:a;
          }
        }else {

        //Throw an error if password input field is empty 
          throw new Error("The password is not valid");
        }
        return String(a);
    }
}

var debug = 1; 

// Setting empty array for users 
var objPeople = [];

// Push a group of users to the empty array
objPeople.push(new User("Frederik", "Hansen", "FH", "niko@niko.com", "10.05.1995", "123"));

//Binding our submit button to a variable
var submit = document.getElementById('submit');

// Show login result in span text 
var resultSpan = document.getElementById('loginResult');

//Set number of login attempts
var loginAttempts = 3;


//LOGIN FUNCTION 
var submitLogin = document.getElementById('submit');
submitLogin.addEventListener('click', function(){

    //Create a binding that gets the value from HTML input fields
    var inputUsername = document.getElementById('username');
    var inputPassword = document.getElementById('password');

    //Make sure fields are filled with information 
     if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
         resultSpan.innerText = "You need to enter valid information";
         return false;
    }
    
    //When information is entered, we will loop through it to check the information
    for (var i = 0; i < objPeople.length; i++) {

        //Bind user and password to values for future use
        var user = objPeople[i];
        
        try{
        var hashedInputPassword = user.hashPassword(inputPassword.value);
        } catch (error){
        console.log(error);
        }  

        //Check if username and password are valid
        if (user.username == inputUsername.value && user.password == hashedInputPassword) {
            
            //See last access time. Right now not necessary
            //user.setLastAccess();

            window.location.replace("index.html");
            // 'Return true' helps to only return the successful login and leave out the other results.
            return true;
        }
        console.log("Button is clicked");
    };

    // Count the number of login attempts (set to three)
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
});

// CREATE NEW USER

//Bind a variable to the registerUser button
var registerUser = document.getElementById('registerUser');

//Add an event listener to the button 
registerUser.addEventListener("click", function(regUser){

//Create bindings that retrieve information from input fields
     var setFirstName = document.getElementById('firstname').value
     var setLastName = document.getElementById('lastname').value
     var setNewUsername = document.getElementById('newUsername').value
     var setEmail = document.getElementById('email').value
     var setBirthDate = document.getElementById('calendar').value
     var setNewPassword = document.getElementById('newPassword').value

    // Bind new users 
    var users = new User(setFirstName, 
                         setLastName,   
                         setNewUsername, 
                         setEmail, 
                         setBirthDate, 
                         setNewPassword);

    for (i = 0; i < objPeople.length; i++) {
        if (setNewUsername == objPeople[i].username) {
            document.getElementById("checkUsername").innerHTML = ("That username already exists")
            return

        //Check password length
        } if (setNewPassword.length < 8) {
            document.getElementById("checkPassword").innerHTML = ("Your password is too short")
            return
        }  
    }
    

   // Push new user to our object in the top
     objPeople.push(users);

     // Stringify object because localStorage only accepts strings
     localStorage.setItem("users", JSON.stringify(users));

     console.log(objPeople)
 });

   // Here we create a function to check if the passwords are matching by checking the values with an if statement 
   var controlPassword = function() {
    if (document.getElementById("newPassword").value == document.getElementById("confirmPassword").value) {
      // If the passwords are matching we want it to show a message that says "Password is matching"
      document.getElementById("message").style.color = "purple";
      document.getElementById("message").innerHTML = "Password is matching";
      document.getElementById('registerUser').disabled = false;
    } else {
      document.getElementById("message").style.color = "black"; 
      document.getElementById("message").innerHTML = "Password is not matching";
      document.getElementById('registerUser').disabled = true;

      //TODO: this code ONLY shows if the passwords are not matching, this does not stop the user from proceeding 
    } 
  }
 

