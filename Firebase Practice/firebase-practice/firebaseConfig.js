// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGrJjHmlUIgd64lGaLU-ZiQWHu4lVt4VM",
  authDomain: "fir-practice-71460.firebaseapp.com",
  projectId: "fir-practice-71460",
  storageBucket: "fir-practice-71460.firebasestorage.app",
  messagingSenderId: "930370744864",
  appId: "1:930370744864:web:0e024cdb9ffbd3cf5dc245",
  measurementId: "G-XXS8N2R089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

export {auth,db}