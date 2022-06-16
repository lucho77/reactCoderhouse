// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj26XDBVBLmx9kUeHBwaakChYP10EHOjU",
  authDomain: "backcoder-22cd8.firebaseapp.com",
  projectId: "backcoder-22cd8",
  storageBucket: "backcoder-22cd8.appspot.com",
  messagingSenderId: "310332926236",
  appId: "1:310332926236:web:2a8c16c977fbb4ecae72d9",
  measurementId: "G-LC9X9M23E8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);