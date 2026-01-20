// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxtJhThsF7SUiwTbipYA8nUrWxDGxH6wk",
  authDomain: "portfolio-404d4.firebaseapp.com",
  projectId: "portfolio-404d4",
  storageBucket: "portfolio-404d4.firebasestorage.app",
  messagingSenderId: "842260208239",
  appId: "1:842260208239:web:3eca325a1a0c9dfa46cb9a",
  measurementId: "G-BGRXDPSYK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

