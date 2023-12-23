// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBr5R4ydEUwk8xy2fU15iED1MUxzEQADKk",

  authDomain: "project-3164040385120819079.firebaseapp.com",

  projectId: "project-3164040385120819079",

  storageBucket: "project-3164040385120819079.appspot.com",

  messagingSenderId: "176751653755",

  appId: "1:176751653755:web:f522270db905c4895a03de",

  measurementId: "G-RGWCGE0EJN"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);