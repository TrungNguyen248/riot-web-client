// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQPQs7Jvuj-UWUBg_IAiAs8ayR6QYIzPQ",
  authDomain: "riot-web-a45bd.firebaseapp.com",
  projectId: "riot-web-a45bd",
  storageBucket: "riot-web-a45bd.appspot.com",
  messagingSenderId: "91092779097",
  appId: "1:91092779097:web:e82cbfd7b84ea60fc5f148",
  measurementId: "G-2H94Q2RMMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);