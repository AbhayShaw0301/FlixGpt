// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIHtUwS1DZRfpJfUh-VsDYCtnsTWU9LwM",
  authDomain: "flixgpt-70480.firebaseapp.com",
  projectId: "flixgpt-70480",
  storageBucket: "flixgpt-70480.appspot.com",
  messagingSenderId: "838804314509",
  appId: "1:838804314509:web:e0016ac5246c165c9305c4",
  measurementId: "G-N4Q3398Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);