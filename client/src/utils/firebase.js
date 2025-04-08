// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-a6762.firebaseapp.com",
  projectId: "taskmanager-a6762",
  storageBucket: "taskmanager-a6762.firebasestorage.app",
  messagingSenderId: "1038138000241",
  appId: "1:1038138000241:web:9404a21dc64328a01aacd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

