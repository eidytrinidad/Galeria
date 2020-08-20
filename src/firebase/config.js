 import * as firebase from 'firebase/app'
 import 'firebase/storage'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDzqZ0Y-SdWoc3kmUJftEO7SIFP5nMMhEo",
    authDomain: "reactfiregram-9df5f.firebaseapp.com",
    databaseURL: "https://reactfiregram-9df5f.firebaseio.com",
    projectId: "reactfiregram-9df5f",
    storageBucket: "reactfiregram-9df5f.appspot.com",
    messagingSenderId: "484600466960",
    appId: "1:484600466960:web:335ca300a4f99b49280495"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestorage = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export{projectFirestorage,projectStorage,timestamp};