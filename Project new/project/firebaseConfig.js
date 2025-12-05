// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSX6VTD-y_JIYzSgmI7TdIiYGDSmWo2vU",
  authDomain: "new-project-ccbf2.firebaseapp.com",
  projectId: "new-project-ccbf2",
  storageBucket: "new-project-ccbf2.firebasestorage.app",
  messagingSenderId: "50505586298",
  appId: "1:50505586298:web:bdfd36ce4cb4cd1d114dc3",
  measurementId: "G-0Z5QPFJPTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
