// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzOLY9kaBfzb1ZisqGjzNZx1LBeXhPHbs",
  authDomain: "my-school-app-bf2cd.firebaseapp.com",
  projectId: "my-school-app-bf2cd",
  storageBucket: "my-school-app-bf2cd.appspot.com",
  messagingSenderId: "1037206431339",
  appId: "1:1037206431339:web:b6f1ac39397066bed1332e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;