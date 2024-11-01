// src/hooks/useProfile.js
import { useState, useEffect } from 'react';
import { firestore } from '../utils/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import useAuth from './useAuth';

const useProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!currentUser) {
        console.log("No current user found, setting loading to false."); // Logging if no user is found
        setLoading(false);
        return;
      }

      console.log("Current User UID:", currentUser.uid); // Logg UID-en her

      try {
        const userDocRef = doc(firestore, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setProfileData(userDoc.data());
          console.log("Profile data loaded:", userDoc.data()); // Logg profildata ved henting
        } else {
          console.error("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [currentUser]);

  return { profileData, loading };
};

export default useProfile;

