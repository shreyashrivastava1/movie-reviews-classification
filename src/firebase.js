// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhbLUWuJpVL3HMGARFgc6rrA2Of0bpTac",
  authDomain: "movies-reviews-classification.firebaseapp.com",
  projectId: "movies-reviews-classification",
  storageBucket: "movies-reviews-classification.firebasestorage.app",
  messagingSenderId: "803947408069",
  appId: "1:803947408069:web:3a85081fc65fbbb5139eac",
  measurementId: "G-41C9WPLD31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
