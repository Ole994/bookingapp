import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const useProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        setCurrentUser(user);
      } else {
        console.log("No user is logged in.");
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!currentUser) {
        console.error("No current user found.");
        setLoading(false);
        return;
      }

      const db = getFirestore();
      const userDocRef = doc(db, 'users', currentUser.uid);

      try {
        console.log("Fetching document for UID:", currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          console.log("User document found:", userDoc.data());
          setProfileData(userDoc.data());
        } else {
          console.error("User document does not exist. UID:", currentUser.uid);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser) {
      fetchProfileData();
    }
  }, [currentUser]);

  return { profileData, loading };
};

export default useProfile;
