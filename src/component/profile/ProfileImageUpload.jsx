import { useEffect, useState } from 'react';
import { storage } from '../../utils/firebaseConfig'; 
import { ref, getDownloadURL } from 'firebase/storage';
import useAuth from '../../hooks/useAuth';
import PropTypes from 'prop-types';

const ProfileImageUpload = ({ profileImageUrl, setProfileImageUrl }) => {
  const { currentUser } = useAuth(); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageUrl = async () => {
      if (currentUser) {
        try {
          const imageRef = ref(storage, `profileImages/${currentUser.uid}`);
          const url = await getDownloadURL(imageRef);
          setProfileImageUrl(url); // Oppdaterer forelderen med den nye URL-en
        } catch (err) {
          console.error("Error fetching image URL:", err);
          setError('Failed to fetch image URL.'); // Setter feilmelding
        }
      }
    };
    fetchImageUrl();
  }, [currentUser, setProfileImageUrl]);

  return (
    <div>
      {profileImageUrl ? (
        <img src={profileImageUrl} alt="Profile" style={{ width: '100px', height: '100px' }} />
      ) : (
        <p>No profile image found.</p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

// Definerer PropTypes for validering
ProfileImageUpload.propTypes = {
  profileImageUrl: PropTypes.string, // Gjør dette valgfritt
  setProfileImageUrl: PropTypes.func, // Gjør også dette valgfritt
};

export default ProfileImageUpload;













