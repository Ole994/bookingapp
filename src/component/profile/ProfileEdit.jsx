import { useState, useEffect } from 'react';
import useProfile from '../../hooks/useProfile';
import { useNavigate } from 'react-router-dom'; // Bruker useNavigate i stedet for useHistory
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig'; // Sørg for at db er eksportert riktig
import "./profile.css"

const ProfileEdit = () => {
  const { profileData, loading } = useProfile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
    address: '',
    uid: '',
    birthDate: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate(); // Bruker useNavigate

  useEffect(() => {
    if (profileData) {
      setFormData({
        name: profileData.name || '', // Gi en tom streng som fallback
        email: profileData.email || '',
        city: profileData.city || '',
        country: profileData.country || '',
        address: profileData.address || '',
        uid: profileData.uid || '',
        birthDate: profileData.birthDate || '',
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
      setIsEditing(false);
      navigate('/profile'); // Naviger tilbake til profil
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-edit-container">
      <h1>Rediger Profil</h1>
      <div className="profile-row">
        <label className="profile-label">Navn:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={!isEditing}
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
          readOnly={!isEditing}
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
          readOnly={!isEditing}
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
          readOnly={!isEditing}
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
          readOnly={!isEditing}
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
          readOnly={!isEditing}
          className="profile-input"
        />
      </div>

      <div className="button-group">
        <button className="edit-button" onClick={() => setIsEditing(true)}>Rediger</button>
        <button className="save-button" onClick={handleSave} disabled={!isEditing}>Lagre</button>
        <button className="cancel-button" onClick={() => navigate('/profile')}>Avbryt</button>
      </div>
    </div>
  );
};

export default ProfileEdit;















