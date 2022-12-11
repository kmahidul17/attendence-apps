// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAY4RNU4o3kLECunbbhn2b3o-2iIrbjP0o",
    authDomain: "attendence-app-8f617.firebaseapp.com",
    projectId: "attendence-app-8f617",
    storageBucket: "attendence-app-8f617.appspot.com",
    messagingSenderId: "336639991683",
    appId: "1:336639991683:web:8a3fbb75ddba997810a0b6",
    measurementId: "G-37JZHPP6BX"
  };
  
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage }