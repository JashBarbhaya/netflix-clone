// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhthu4phfkN2mNeti9GH_4AKQ1JWg6XBU",
  authDomain: "react-netfix-clone-b39b8.firebaseapp.com",
  projectId: "react-netfix-clone-b39b8",
  storageBucket: "react-netfix-clone-b39b8.firebasestorage.app",
  messagingSenderId: "247380941107",
  appId: "1:247380941107:web:ce12e07c7d56e3e156c646",
  measurementId: "G-XBQYC7T7JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);