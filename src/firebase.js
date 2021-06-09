  
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBbnkZ0say7fdgqDWuYUvC8TwY8QvOJ1CU",
    authDomain: "clone-37d44.firebaseapp.com",
    projectId: "clone-37d44",
    storageBucket: "clone-37d44.appspot.com",
    messagingSenderId: "557008991742",
    appId: "1:557008991742:web:bd0359fd3ae241375d3caf",
    measurementId: "G-89BBJW3EL2"
  });

const auth = firebase.auth();

export {auth }