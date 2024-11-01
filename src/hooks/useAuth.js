// src/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '../utils/firebaseConfig';
import { updateEmail, updatePassword, onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("User state changed:", user); // Logg brukerstatusendringer
      setCurrentUser(user); // Oppdaterer currentUser når autentiseringstilstanden endres
    });

    return () => unsubscribe(); // Rydder opp abonnementet når komponenten avmonteres
  }, []);

  const updateUserEmail = async (newEmail) => {
    if (newEmail !== auth.currentUser.email) {
      await updateEmail(auth.currentUser, newEmail);
      console.log("User email updated to:", newEmail); // Logg når e-post oppdateres
    }
  };

  const updateUserPassword = async (newPassword) => {
    if (newPassword) {
      await updatePassword(auth.currentUser, newPassword);
      console.log("User password updated."); // Logg når passord oppdateres
    }
  };

  return {
    currentUser, // Returner currentUser for bruk i komponentene
    updateUserEmail,
    updateUserPassword,
  };
};

export default useAuth;


