// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFAHjBAXrR901Pwck4vtkb1pixyWz5PDw",
    authDomain: "uv-ven.firebaseapp.com",
    projectId: "uv-ven",
    storageBucket: "uv-ven.appspot.com",
    messagingSenderId: "412697503213",
    appId: "1:412697503213:web:2d7eab108d34e34fa0f3e4"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const storage = firebase.storage();
export {
    storage, firestore as default 

}