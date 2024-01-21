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
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

function logout() { 
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
  }

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

      } });  }); }
getData();
