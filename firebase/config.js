// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import * as analytics from "firebase/analytics";
import "firebase/storage"
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9n1saRzFoGwonRU3MtWaZwsd2IjNxs4k",
  authDomain: "bp-styles.firebaseapp.com",
  projectId: "bp-styles",
  storageBucket: "bp-styles.appspot.com",
  messagingSenderId: "610591993357",
  appId: "1:610591993357:web:7bfcd98743c56c4b4f6f44",
  measurementId: "G-DWXQX1GB5Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
analytics.getAnalytics(firebase);
const theStorage = firebase.storage();
const theFirestore = firebase.firestore();

export {theStorage, theFirestore}