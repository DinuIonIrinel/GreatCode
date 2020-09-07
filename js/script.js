
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBW_YW7bmE1N8KOxmoy4ogsGhCUlCLpM0",
  authDomain: "greatcode-b0fe4.firebaseapp.com",
  databaseURL: "https://greatcode-b0fe4.firebaseio.com",
  projectId: "greatcode-b0fe4",
  storageBucket: "greatcode-b0fe4.appspot.com",
  messagingSenderId: "804358284352",
  appId: "1:804358284352:web:c2c9b1c751e17dd142aba5",
  measurementId: "G-R1MXTL9MW1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function signUp(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("You have a new account.Go back,and Login.")
}



function signIn(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      location.replace("home.html");
      var user = firebase.auth().currentUser;
    } else {

    }

  });


}

function signOut(){

  firebase.auth().signOut().then(function() {
    // Sign-out successful
    location.replace("index.html");
  }).catch(function(error) {
    // An error happened.
  });

}
function quiz() {
  q1 = document.quizf.q1.value;
  q2 = document.quizf.q2.value;
  q3 = document.quizf.q3.value;
  q3 = document.quizf.q4.value;
  var count = 0;
  if ( q1 == "b") {
      count++;
  }
  if ( q2 == "b") {
      count++;
  }
  if ( q3 == "b") {
      count++;
  }
  if ( q4 == "b") {
      count++;
  }
  window.alert(count + "correct answers");

}
