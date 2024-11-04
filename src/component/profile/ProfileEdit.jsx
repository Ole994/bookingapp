import { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig'; 
import PropTypes from 'prop-types';
import './profile.css'; 

const ProfileEdit = ({ onClose, profileData, profileImageUrl }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
    address: '',
    uid: '',
    birthDate: '',
    gender: '',
  });

  useEffect(() => {
    if (profileData) {
      setFormData({
        name: profileData.name || '',
        email: profileData.email || '',
        city: profileData.city || '',
        country: profileData.country || '',
        address: profileData.address || '',
        uid: profileData.uid || '',
        birthDate: profileData.birthDate || '',
        gender: profileData.gender || '',
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      <h1>Rediger Profil</h1>

      {/* Vise profilbilde */}
      {profileImageUrl && (
        <img src={profileImageUrl} alt="Profile" className="profile-image" />
      )}

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
        <label className="profile-label">By:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">Land:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">Adresse:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="profile-input"
        />
      </div>
      <div className="profile-row">
        <label className="profile-label">Fødselsdato:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
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































