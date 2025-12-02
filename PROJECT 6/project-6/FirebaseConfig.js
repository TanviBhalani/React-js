// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6V4rglle13I_3wI7AufVfpGwcMHMHqIo",
  authDomain: "project-6-429e8.firebaseapp.com",
  projectId: "project-6-429e8",
  storageBucket: "project-6-429e8.firebasestorage.app",
  messagingSenderId: "278864826058",
  appId: "1:278864826058:web:174eccbd7134375c212e33",
  measurementId: "G-3FYT9CVPSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth , db}
