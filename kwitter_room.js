//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDk58bpfwO1CC_kejnH8l7xnDTUIpvDEcc",
    authDomain: "kwitter-e040e.firebaseapp.com",
    databaseURL: "https://kwitter-e040e-default-rtdb.firebaseio.com",
    projectId: "kwitter-e040e",
    storageBucket: "kwitter-e040e.appspot.com",
    messagingSenderId: "799312536024",
    appId: "1:799312536024:web:e0f07b9f0c8a6edd9092ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name2").innerHTML = "welcome " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoom(this.id)' >" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoom(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
