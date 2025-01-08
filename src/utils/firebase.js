import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBgLnzV8gas9dMUno9Ol7MNKuSLNkwppRw",
  authDomain: "filmai-a5dd1.firebaseapp.com",
  projectId: "filmai-a5dd1",
  storageBucket: "filmai-a5dd1.firebasestorage.app",
  messagingSenderId: "976072887462",
  appId: "1:976072887462:web:0dbd6c6d47a1bcf831b867",
  measurementId: "G-MZRC5FYFZP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export const createNewUser = async (email, password) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    console.log(cred.user);
  } catch (error) {
    throw new Error(error);
  }
};
export const signInUser = async (email, password) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    console.log(cred.user);
  } catch (error) {
    throw new Error(error);
  }
};
