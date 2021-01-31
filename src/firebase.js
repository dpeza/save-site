import firebase from 'firebase';
firebase.initializeApp({
    apiKey: "AIzaSyD2jY1vA2aCnN34AxHBmk8gD4JIQsE_BF8",
    authDomain: "save-club-d87e5.firebaseapp.com",
    projectId: "save-club-d87e5",
    storageBucket: "save-club-d87e5.appspot.com",
    messagingSenderId: "645614477167",
    appId: "1:645614477167:web:415baf2146b7525351129a",
    measurementId: "G-XFHDDRKVVB"
})
const db = firebase.firestore();
export default db;