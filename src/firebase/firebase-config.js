import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTuLQ7ooRI6l6rwi0EVTvvq2gJFkK_DJQ",
  authDomain: "react-app-curso-f5e45.firebaseapp.com",
  projectId: "react-app-curso-f5e45",
  storageBucket: "react-app-curso-f5e45.appspot.com",
  messagingSenderId: "988935306015",
  appId: "1:988935306015:web:fbb419664f569e3d0fce2a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};
