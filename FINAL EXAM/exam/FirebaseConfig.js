// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwwSqS-JbNnioKj9Bcf2Fjims8ESoOdu0",
  authDomain: "exam-ac077.firebaseapp.com",
  projectId: "exam-ac077",
  storageBucket: "exam-ac077.firebasestorage.app",
  messagingSenderId: "949177884554",
  appId: "1:949177884554:web:4eb6f8d797171271e4b273",
  measurementId: "G-6XN53E6LSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}
