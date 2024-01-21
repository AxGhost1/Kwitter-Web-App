var firebaseConfig = {
  apiKey: "AIzaSyD52CKcztV12GCY296jkRvFpli_OhvPVb4",
  authDomain: "kwitter-d62b5.firebaseapp.com",
  databaseURL: "https://kwitter-d62b5-default-rtdb.firebaseio.com",
  projectId: "kwitter-d62b5",
  storageBucket: "kwitter-d62b5.appspot.com",
  messagingSenderId: "222634437235",
  appId: "1:222634437235:web:f676f98db3b963372a1806"
};

firebase.initializeApp(firebaseConfig);

var user_name= localStorage.getItem("user_name",user_name)
document.getElementById("user_name").innerHTML="Welcome "+ user_name;


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });


  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html"
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("RoomName -" + Room_names);
       row = "<div class='room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location = "kwitter_page.html";
}

function logout() { 
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}