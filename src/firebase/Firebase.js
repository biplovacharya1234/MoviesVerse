// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection} from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7H1kF6mE-UeO4LlR-bijQzYFkk6Bp1Ng",
  authDomain: "moviesverse-4a0d2.firebaseapp.com",
  projectId: "moviesverse-4a0d2",
  storageBucket: "moviesverse-4a0d2.appspot.com",
  messagingSenderId: "128506830178",
  appId: "1:128506830178:web:29168f7a6a587d7554e03b",
  measurementId: "G-YFSE0KW60C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const moviesRef = collection(db, "Movies");
export const reviewsRef = collection(db, "Reviews");

export default app;