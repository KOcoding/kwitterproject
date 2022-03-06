var firebaseConfig = {
    apiKey: "AIzaSyBN1KN-5-kh4XJj0z0VM6NbQhmFBXHRy7o",
    authDomain: "kwitter-4ecab.firebaseapp.com",
    databaseURL: "https://kwitter-4ecab-default-rtdb.firebaseio.com",
    projectId: "kwitter-4ecab",
    storageBucket: "kwitter-4ecab.appspot.com",
    messagingSenderId: "400917213356",
    appId: "1:400917213356:web:e30132dfa060b76df5af09"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
