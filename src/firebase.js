import { initializeApp } from 'firebase/app'; // add
import { getAuth } from 'firebase/auth'; // add
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyADVDEB5Rhajw4xQovlopLs_RoEvI7gu1g",
    authDomain: "zeetech-71271.firebaseapp.com",
    projectId: "zeetech-71271",
    storageBucket: "zeetech-71271.appspot.com",
    messagingSenderId: "154757764521",
    appId: "1:154757764521:web:049efddc68233c541ae0b8"
};

// Initialize Firebase with your configuration object
const app = initializeApp(firebaseConfig);

// Get the Firebase authentication and Firestore database instances
const auth = getAuth(app); // add
const database = getFirestore(app); // add

// Export the Firebase authentication and Firestore database instances
export { auth, database }; //add
