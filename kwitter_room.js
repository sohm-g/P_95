var firebaseConfig = {
      apiKey: "AIzaSyDWeRJ05tGD-8kZCusiNpdZFL61r2W7gN4",
      authDomain: "kwitter-2f6dc.firebaseapp.com",
      databaseURL: "https://kwitter-2f6dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f6dc",
      storageBucket: "kwitter-2f6dc.appspot.com",
      messagingSenderId: "463840082409",
      appId: "1:463840082409:web:fe4dae6ea96a147d07b378",
      measurementId: "G-2SXX0GH2DD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = " Welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setIt
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}