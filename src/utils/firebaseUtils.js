import { firestore, storage } from './firebaseConfig'; // Pass på at banen er korrekt
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Hent brukerdata fra Firestore
export const getUserData = async (userId) => {
  try {
      const userDoc = await getDoc(doc(firestore, 'users', userId));
      if (userDoc.exists()) {
          return userDoc.data();
      } else {
          throw new Error("User not found");
      }
  } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
  }
};

// Oppdater brukerdata i Firestore
export const updateUserData = async (userId, data) => {
  // Validerer data før oppdatering
  if (!data || typeof data !== 'object') {
      throw new Error("Invalid data provided");
  }

  try {
      await setDoc(doc(firestore, 'users', userId), data, { merge: true });
      return "User data updated successfully"; // Tilbakemelding
  } catch (error) {
      console.error("Error updating user data:", error);
      throw error;
  }
};

// Last opp profilbilde til Firebase Storage og hent URL
export const uploadProfileImage = async (userId, file) => {
  // Validerer filen før opplasting
  if (!file || !(file instanceof Blob)) {
      throw new Error("Invalid file provided");
  }

  try {
      const imageRef = ref(storage, `profileImages/${userId}`);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl; // Returner kun URL-en som en string
  } catch (error) {
      console.error("Error uploading profile image:", error);
      throw error;
  }
};

// Hent profilbilde-URL for bruker
export const getProfileImageUrl = async (userId) => {
  try {
      const imageRef = ref(storage, `profileImages/${userId}`);
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
  } catch (error) {
      console.error("Error fetching profile image URL:", error);
      throw error;
  }
};