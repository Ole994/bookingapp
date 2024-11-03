// src/component/profile/ProfileImageUpload.jsx
import { useState } from 'react';
import { storage } from '../../utils/firebaseConfig'; // Importer Firebase Storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore'; // Importer setDoc fra Firestore
import { firestore } from '../../utils/firebaseConfig'; // Importer Firestore
import useAuth from '../../hooks/useAuth';
import PropTypes from 'prop-types';

const ProfileImageUpload = ({ setProfileImageUrl }) => {
  const { currentUser } = useAuth(); // Hent gjeldende bruker
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image || !currentUser) return;

    try {
      const imageRef = ref(storage, `profileImages/${currentUser.uid}`);
      await uploadBytes(imageRef, image); // Last opp bildet til Firebase
      const imageUrl = await getDownloadURL(imageRef); // Hent URL for det opplastede bildet
      
      // Oppdater Firestore-dokumentet med den nye bilde-URL-en
      await setDoc(doc(firestore, 'users', currentUser.uid), {
        profileImage: imageUrl
      }, { merge: true }); // Merge for å bevare eksisterende felt

      setProfileImageUrl(imageUrl); // Oppdater forelderen med den nye URL-en
      setSuccess('Image uploaded successfully!');
      setError(null); // Nullstill eventuelle feil
    } catch (err) {
      console.error("Error uploading image:", err);
      setError('Failed to upload image.'); // Sett feilmelding
      setSuccess(null); // Nullstill eventuelle suksessmeldinger
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="button" onClick={handleUpload}>Upload Image</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

// PropTypes for validering
ProfileImageUpload.propTypes = {
  setProfileImageUrl: PropTypes.func.isRequired, // Krever en funksjon som prop
};

export default ProfileImageUpload;

















