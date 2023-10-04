// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArsutfo_JMYnOW-Qf2PoB_Gvzt9aaCIAI",
  authDomain: "react-dragon-news-auth-fdc96.firebaseapp.com",
  projectId: "react-dragon-news-auth-fdc96",
  storageBucket: "react-dragon-news-auth-fdc96.appspot.com",
  messagingSenderId: "1027361871716",
  appId: "1:1027361871716:web:25cd8de5aac58ff2e60c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;