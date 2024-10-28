// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

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

// Funksjon for å logge Firebase-feil
const logError = (error) => {
  console.error("Firebase Error:", error.message);
  // Du kan også utvide denne funksjonen for å logge til et eksternt verktøy, som Sentry eller LogRocket
};

// Initialiser Firebase-appen med feilhåndtering
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  logError(error);
}

// Initialiser Firestore og fang opp eventuelle feil
let firestore;
try {
  firestore = getFirestore(app);
} catch (error) {
  logError(error);
}

// Initialiser Firebase Authentication og fang opp eventuelle feil
let auth;
try {
  auth = getAuth(app);
} catch (error) {
  logError(error);
}

// Initialiser Analytics og fang opp eventuelle feil
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  logError(error);
}

export { firestore, auth, analytics };
