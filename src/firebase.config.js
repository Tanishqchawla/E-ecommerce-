// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUY-ava2kpCE9Io8bOEkomgb4h64mosCw",
  authDomain: "final-project-50fdf.firebaseapp.com",
  projectId: "final-project-50fdf",
  storageBucket: "final-project-50fdf.appspot.com",
  messagingSenderId: "908724942714",
  appId: "1:908724942714:web:b3ea76af36adc722cfc8c3",
  measurementId: "G-5YC9JWKZEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage(app);


