// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF3PiF6S6tMUMxxvkGdajhdcCWD35DGgY",
  authDomain: "toptech-packaging.firebaseapp.com",
  projectId: "toptech-packaging",
  storageBucket: "toptech-packaging.firebasestorage.app",
  messagingSenderId: "59705837128",
  appId: "1:59705837128:web:48fd17b23d4a18257b3a7d",
  measurementId: "G-XDTNTKGT0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);