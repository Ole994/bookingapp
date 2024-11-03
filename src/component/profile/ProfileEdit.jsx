import { useState, useEffect } from 'react';
import useProfile from '../../hooks/useProfile';
import { useHistory } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig'; // Juster importen etter din struktur

const ProfileEdit = () => {
  const { profileData, loading } = useProfile();
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (profileData) {
      setFormData({
        name: profileData.name,
        email: profileData.email,
        city: profileData.city,
        country: profileData.country,
        address: profileData.address,
        uid: profileData.uid, // Husk å inkludere uid for oppdatering
      });
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const userRef = doc(db, 'users', formData.uid); // Referanse til brukerens dokument i Firestore
      await updateDoc(userRef, formData); // Oppdater dokumentet med ny informasjon
      console.log('Saved:', formData);
      setIsEditing(false); // Lås opp for redigering
      history.push('/profile'); // Naviger tilbake til profil
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleSave} disabled={!isEditing}>Save</button>
      <button onClick={() => history.push('/profile')}>Cancel</button>
    </div>
  );
};

export default ProfileEdit;









