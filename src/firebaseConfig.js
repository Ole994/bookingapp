// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase-konfigurasjon
const firebaseConfig = {
  apiKey: "AIzaSyBf-UV2wzdvuGdUdAb4dUVKQln6hYJWtJY",
  authDomain: "bookingpage-bef4a.firebaseapp.com",
  projectId: "bookingpage-bef4a",
  storageBucket: "bookingpage-bef4a.appspot.com",
  messagingSenderId: "676485037932",
  appId: "1:676485037932:web:91736d92b774a628a23d49",
  measurementId: "G-6JTVF4PKK8" // Valgfritt, kun hvis du bruker Google Analytics
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore (for database)
//firestore: Til databaseoperasjoner som brukes i SignUp.jsx
const firestore = getFirestore(app);

// Initialiser Firebase Authentication
//auth: Til autentisering, som brukes i SignUp.jsx.
const auth = getAuth(app);

// Initialiser Analytics
//analytics: spore bruksdata med Google Analytics.
const analytics = getAnalytics(app);

export { firestore, auth, analytics };
