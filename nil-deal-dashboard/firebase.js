// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJYh9kB0h2KYJjYRipx4eAZSh0xnikE7k",
  authDomain: "nil-deal-dashboard.firebaseapp.com",
  projectId: "nil-deal-dashboard",
  storageBucket: "nil-deal-dashboard.appspot.com",
  messagingSenderId: "694203599118",
  appId: "1:694203599118:web:89596368e03d82ca512f5f",
  measurementId: "G-1EC949X454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);