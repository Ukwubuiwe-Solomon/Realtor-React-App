// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC46NyuT2bi9rBuTxs3xOiZrwI-KKv8Uzc",
  authDomain: "realtor-react-app-f159f.firebaseapp.com",
  projectId: "realtor-react-app-f159f",
  storageBucket: "realtor-react-app-f159f.appspot.com",
  messagingSenderId: "389477685419",
  appId: "1:389477685419:web:6452e3d448ec235044bfee"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()