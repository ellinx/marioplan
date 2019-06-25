  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAq8HYX7_966n_mPKfCXOGZXd9d505bYCw",
    authDomain: "marioplan-1d353.firebaseapp.com",
    databaseURL: "https://marioplan-1d353.firebaseio.com",
    projectId: "marioplan-1d353",
    storageBucket: "",
    messagingSenderId: "908200158239",
    appId: "1:908200158239:web:4aa672ca0651ecdd"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase