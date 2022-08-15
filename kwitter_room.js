var firebaseConfig = {
  apiKey: "AIzaSyArMJJapQpAIy5eqJ5fnWsXySNDZz9gkbU",
  authDomain: "letschatapp-4e776.firebaseapp.com",
  projectId: "letschatapp-4e776",
  storageBucket: "letschatapp-4e776.appspot.com",
  messagingSenderId: "1097174498121",
  appId: "1:1097174498121:web:57e683d8da252500d83898"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("UserName").innerHTML = "Welcome "+user_name;

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}