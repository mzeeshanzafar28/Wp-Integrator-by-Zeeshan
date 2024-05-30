// config.js
// Import the functions you need from the SDKs you need
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // add
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADVDEB5Rhajw4xQovlopLs_RoEvI7gu1g",
    authDomain: "zeetech-71271.firebaseapp.com",
    projectId: "zeetech-71271",
    storageBucket: "zeetech-71271.appspot.com",
    messagingSenderId: "154757764521",
    appId: "1:154757764521:web:049efddc68233c541ae0b8"
};

// Initialize Firebase
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app); // add