// // CREATE NEW USER

// function registerUser(){

//     //Retrieve information from input fields

//     var registerUser = document.getElementById("newUser").value
//     var registerPassword = document.getElementById("newPassword").value
    
//     //Create new variable which we can push to our object. 
    
//     var newUser = {
//         username: registerUser,
//         password: registerPassword
//     }

//     // Make sure the username is not taken. 

//     for (i = 0; i < objPeople.length;i++){
//         if(registerUser == objPeople[i].username){
//             alert("that username is already in use")
//             return

//     //Check password length

//     } else if (registerPassword.length < 8) {
//             alert("That password is too short")
//             return
//         }
//     }

//     // Push new user to our object in the top.  

//     objPeople.push(newUser)
//     console.log(objPeople)
// }

// var addToLocalStorageObject = function (objPeople, newUser, value){
//     var existing = localStorage.getItem(objPeople);
//     existing = existing ? JSON.parse(existing) : {};
//     existing[newUser] = value; 
//     localStorage.setItem(objPeople, JSON.stringify(existing));

// };

// // var existing = localStorage.getItem(objPeople);
// // existing = existing ? JSON.parse(existing):{};
// // existing['username'] = newUser;
// // localStorage.setItem('objPeople', JSON.stringify(existing));




// var txt = '{"spot":"Klitmoeller", "country":"Denmark"}'
// var txt = [
//     {
//         spot: "klitmoeller",
//         country: 'Denmark'
//     },
//     {
//         spot: "lofoten",
//         country: "Norway"
//     }
// ]

// let txtString = JSON.stringify(txt)
// localStorage.setItem('bucketItem', txtString)

// let newItem = localStorage.getItem('bucketItem')
// console.log(JSON.parse(newItem))
// console.log(localStorage.getItem(newItem))
// document.getElementById("bucketlisttest").innerHTML = newItem.spot;

// var obj = JSON.parse(txt);
// document.getElementById("bucketlisttest").innerHTML = obj.spot + ", " + obj.country;

// var json = emptyBucket, 
// data = JSON.parse("json", function(key, value){
//     if (key !== "" && typeof value == 'object'){
//         Object.keys.foreach(function(name){
//             if (name.slice(-1) !== '2'){
//                 delete vale[name];
//             }
//         });
//     }
//     return value;
// });
// document.body.appendChild(document.createTextNode(JSON.stringify(data)));

// document.getElementById('showbucketlist').innerHTML = localStorage.getItem('bucketItems')

// var emptyBucket = [];
// var klitmoellerBucketList = document.getElementById("Klitmoeller")

// klitmoellerBucketList.addEventListener("click", function(bucketList){
//     // console.log(this.id);
//     emptyBucket.push(this.id)
//     localStorage.setItem("bucketItems", JSON.stringify(emptyBucket));
//     // console.log(emptyBucket)
// });

// document.getElementById('showbucketlist').innerHTML = localStorage.getItem('bucketItems')

