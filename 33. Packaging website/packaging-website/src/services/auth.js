import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

/* REGISTER */
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/* LOGIN */
export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  return signInWithPopup(auth, provider);
};  
