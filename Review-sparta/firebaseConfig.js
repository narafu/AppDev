import * as firebase from 'firebase/app';
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCZszZ-ptqqURnXF4N5WKxyfiBPWDW42bc",
    authDomain: "appdev-sparta.firebaseapp.com",
    databaseURL: "https://appdev-sparta.firebaseio.com",
    projectId: "appdev-sparta",
    storageBucket: "appdev-sparta.appspot.com",
    messagingSenderId: "83859064337",
    appId: "1:83859064337:web:518c81e7dd1266a17a53b0",
    measurementId: "G-ZSMJRN4ZVQ"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()
