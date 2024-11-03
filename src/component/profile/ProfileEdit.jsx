// import { useState, useEffect } from 'react';
// import useProfile from '../../hooks/useProfile';
// import { useNavigate } from 'react-router-dom'; 
// import { doc, updateDoc } from 'firebase/firestore';
// import { firestore } from '../../utils/firebaseConfig'; 
// import "./profile.css"

// const ProfileEdit = () => {
//   const { profileData, loading } = useProfile();
//   const [formData, setFormData] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (profileData) {
//       setFormData({
//         firstName: profileData.firstName || '',
//         lastName: profileData.lastName || '',
//         email: profileData.email || '',
//         phone: profileData.phone || '',
//         address: profileData.address || '',
//         postalCode: profileData.postalCode || '',
//         city: profileData.city || '',
//         country: profileData.country || '',
//         birthDate: profileData.birthDate || '',
//         gender: profileData.gender || '',
//         description: profileData.description || '',
//         uid: profileData.uid,
//       });
//     }
//   }, [profileData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       const userRef = doc(firestore, 'users', formData.uid);
//       await updateDoc(userRef, formData);
//       console.log('Saved:', formData);
//       setIsEditing(false);
//       navigate('/profile'); 
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="profile-edit-container">
//       <h1>Edit Profile</h1>
//       <div className="form-group">
//         <label>First Name:</label>
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Last Name:</label>
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Phone:</label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Address:</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Postal Code:</label>
//         <input
//           type="text"
//           name="postalCode"
//           value={formData.postalCode}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>City:</label>
//         <input
//           type="text"
//           name="city"
//           value={formData.city}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Country:</label>
//         <input
//           type="text"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Date of Birth:</label>
//         <input
//           type="date"
//           name="birthDate"
//           value={formData.birthDate}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>
//       <div className="form-group">
//         <label>Gender:</label>
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           disabled={!isEditing}
//         >
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           readOnly={!isEditing}
//         />
//       </div>

//       <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
//       <button onClick={handleSave} disabled={!isEditing} className="save-button">Save</button>
//       <button onClick={() => navigate('/profile')} className="cancel-button">Cancel</button>
//     </div>
//   );
// };

// export default ProfileEdit;


import { useState, useEffect } from 'react';
import useProfile from '../../hooks/useProfile';
import { useNavigate } from 'react-router-dom'; // Bruker useNavigate i stedet for useHistory
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig'; // Sørg for at db er eksportert riktig

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
      <div>
        <label>Birth Date:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          readOnly={!isEditing}
        />
      </div>

      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleSave} disabled={!isEditing}>Save</button>
      <button onClick={() => navigate('/profile')}>Cancel</button>
    </div>
  );
};

export default ProfileEdit;














