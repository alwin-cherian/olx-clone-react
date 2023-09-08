import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAw_JEs4sEVDjv8pXgI11YNhm4S2UWNoEo",
    authDomain: "olxdemo-1a98a.firebaseapp.com",
    projectId: "olxdemo-1a98a",
    storageBucket: "olxdemo-1a98a.appspot.com",
    messagingSenderId: "138943042070",
    appId: "1:138943042070:web:82b705e788f2e4bae91b37",
    measurementId: "G-04LGE9PP68"
  };

 export default firebase.initializeApp(firebaseConfig);