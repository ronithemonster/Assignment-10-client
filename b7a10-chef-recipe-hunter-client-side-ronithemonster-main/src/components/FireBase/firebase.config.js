// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYC1byfVOOwqDt25zaZRDpV4DR4hYvRq4",
  authDomain: "food-world-b6f9c.firebaseapp.com",
  projectId: "food-world-b6f9c",
  storageBucket: "food-world-b6f9c.appspot.com",
  messagingSenderId: "863367219745",
  appId: "1:863367219745:web:d2ad4b5b44c5602928b160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;