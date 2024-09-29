// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClBUvP8CkrjHO4LC_u_j23bkTa2c79xkc",
    authDomain: "jdyeongblog.firebaseapp.com",
    projectId: "jdyeongblog",
    storageBucket: "jdyeongblog.appspot.com",
    messagingSenderId: "392489559270",
    appId: "1:392489559270:web:a3eccf1d3716cec6890727",
    measurementId: "G-XTB8S8VD64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)