// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbpgutzShT72xo2Z_NL8wVph1OnIvnPmE",
  authDomain: "chat-7bb5d.firebaseapp.com",
  projectId: "chat-7bb5d",
  storageBucket: "chat-7bb5d.appspot.com",
  messagingSenderId: "407666396981",
  appId: "1:407666396981:web:a4a242b0e41caf597f067c",
  measurementId: "G-PWXCRQ7V00",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// exporting functions or shit outside
export const firestore = getFirestore();
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
