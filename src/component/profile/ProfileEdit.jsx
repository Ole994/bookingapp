// src/component/profile/ProfileImageUpload.jsx
import { useState, useEffect } from 'react';
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
        const imageRef = ref(storage, `profileImages/${currentUser.uid}`);
        try {
          const url = await getDownloadURL(imageRef);
          setProfileImageUrl(url);
        } catch (err) {
          console.error("Error fetching image URL:", err);
          setError('Failed to load image.');
        }
      }
    };

    fetchImageUrl();
  }, [currentUser, setProfileImageUrl]);

  return (
    <div>
      {profileImageUrl ? (
        <img
          src={profileImageUrl}
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      ) : (
        <p>No profile image found.</p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

// PropTypes validation
ProfileImageUpload.propTypes = {
  profileImageUrl: PropTypes.string.isRequired,
  setProfileImageUrl: PropTypes.func.isRequired,
};

export default ProfileImageUpload;



