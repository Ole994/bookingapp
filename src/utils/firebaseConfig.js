// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage'; // Importer getStorage fra Firebase

// Firebase-konfigurasjon
const firebaseConfig = {
  apiKey: "AIzaSyBf-UV2wzdvuGdUdAb4dUVKQln6hYJWtJY",
  authDomain: "bookingpage-bef4a.firebaseapp.com",
  projectId: "bookingpage-bef4a",
  storageBucket: "bookingpage-bef4a.appspot.com",
  messagingSenderId: "676485037932",
  appId: "1:676485037932:web:91736d92b774a628a23d49",
  measurementId: "G-6JTVF4PKK8"
};

// Initialiser Firebase-appen
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase app:", error);
}

// Initialiser Firestore
const firestore = getFirestore(app);

// Initialiser Auth
const auth = getAuth(app);

// Initialiser Storage
const storage = getStorage(app);

// Initialiser Analytics
const analytics = getAnalytics(app);

const db = getFirestore(app);

// Eksporter nødvendige moduler
export { firestore, auth, storage, analytics, db };



