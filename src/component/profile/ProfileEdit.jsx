import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../utils/firebaseConfig'; 
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Importer nødvendige funksjoner fra Firebase Storage
import PropTypes from 'prop-types';
import './profile.css'; 

const ProfileEdit = ({ onClose, profileData, profileImageUrl }) => {
  const [formData, setFormData] = useState({
    name: profileData?.name || '',
    email: profileData?.email || '',
    phone: profileData?.phone || '',
    address: profileData?.address || '',
    postalCode: profileData?.postalCode || '',
    postalPlace: profileData?.postalPlace || '',
    city: profileData?.city || '',
    uid: profileData?.uid || '',
    country: profileData?.country || '',
    gender: profileData?.gender || '',
    birthDate: profileData?.birthDate || '',
  });
  
  // Tilstand for opplasting av profilbilde
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (profileData) {
      setFormData({
        name: profileData.name || '',
        email: profileData.email || '',
        phone: profileData.phone || '',
        address: profileData.address || '',
        postalCode: profileData.postalCode || '',
        postalPlace: profileData.postalPlace || '',
        city: profileData.city || '',
        uid: profileData.uid || '',
        country: profileData.country || '',
        birthDate: profileData.birthDate || '',
        gender: profileData.gender || '',
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]); // Sett bildet for opplasting
    }
  };

  const handleUpload = async () => {
    if (!image || !formData.uid) return; // Sjekk om det er et bilde og om uid er tilgjengelig

    try {
      const imageRef = ref(storage, `profileImages/${formData.uid}`); // Referanse for lagring
      await uploadBytes(imageRef, image); // Last opp bildet til Firebase
      const imageUrl = await getDownloadURL(imageRef); // Hent URL for det opplastede bildet
      
      // Oppdater Firestore-dokumentet med den nye bilde-URL-en
      const userRef = doc(db, 'users', formData.uid);
      await updateDoc(userRef, { profileImage: imageUrl }, { merge: true }); // Merge for å bevare eksisterende felt

      onClose(); // Lukk redigeringsvinduet
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSave = async () => {
    try {
      const userRef = doc(db, 'users', formData.uid);
      await updateDoc(userRef, formData);
      console.log('Saved:', formData);
      onClose(); // Lukk redigeringsvinduet
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="profile-edit-container">
     

      {/* Vise profilbilde */}
      {profileImageUrl && (
        <img src={profileImageUrl} alt="Profile" className="profile-image" />
      )}
 <h1>Rediger Profil</h1>
      {/* Last opp nytt profilbilde */}
      <div className="profile-row">
        <label className="profile-label">Last opp nytt profilbilde:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="profile-input"
        />
        <button onClick={handleUpload}>Last opp</button>
      </div>

      {/* Felter for redigering */}
      <div className="profile-row">
        <label className="profile-label">Navn:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">E-post:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">Telefon:</label>
        <input
  type="text"
  name="phone" 
  value={formData.phone}
  onChange={handleChange}
  className="profile-input"
/>
      </div>
      <div className="profile-row">
        <label className="profile-label">addresse:</label>
        <input
  type="text"
  name="address"
  value={formData.address}
  onChange={handleChange}
  className="profile-input"
/>
      </div>
      <div className="profile-row">
        <label className="profile-label">Postnummer:</label>
        <input
          type="text"
          name="address"
          value={formData.postalCode}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">By:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.city}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">Kjønn:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="profile-input"
        />
      </div>

      <div className="button-group">
        <button className="save-button" onClick={handleSave}>Lagre</button>
        <button className="cancel-button" onClick={onClose}>Avbryt</button>
      </div>
    </div>
  );
};

// Props validering
ProfileEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  profileData: PropTypes.object.isRequired,
  profileImageUrl: PropTypes.string.isRequired,
};

export default ProfileEdit;

































