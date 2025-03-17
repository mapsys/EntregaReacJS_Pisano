// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4tA-dUDyBYa1-GTbF-qYuTCIRAuwAAg",
  authDomain: "reactjs-pisano.firebaseapp.com",
  projectId: "reactjs-pisano",
  storageBucket: "reactjs-pisano.firebasestorage.app",
  messagingSenderId: "1074153093667",
  appId: "1:1074153093667:web:47dc8088ce77c1c0420f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);