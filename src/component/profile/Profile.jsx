import { useState, useEffect } from 'react';
import useProfile from '../../hooks/useProfile';
import ProfileImageUpload from './ProfileImageUpload';
import ProfileEdit from './ProfileEdit'; // Importer ProfileEdit
import { FaEdit, FaUser } from 'react-icons/fa'; // Importer ikoner
import './profile.css'; // Importer CSS-filen

const Profile = () => {
  const { profileData, loading } = useProfile();
  const [profileImageUrl, setProfileImageUrl] = useState(profileData?.profileImage || '');
  const [isEditing, setIsEditing] = useState(false); // Tilstand for redigering

  useEffect(() => {
    if (profileData?.profileImage) {
      setProfileImageUrl(profileData.profileImage);
    }
  }, [profileData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true); // Sett redigeringstilstand til true
  };

  const handleProfileClick = () => {
    setIsEditing(false); // Sett redigeringstilstand til false
  };

  return (
    <div className="profile-container"> {/* Bruk klassenavn for CSS */}
      {/* Sidebar */}
      <div className="sidebar"> {/* Bruk klassenavn for CSS */}
        <h3>Sidebar</h3>
        <button onClick={handleProfileClick} className="sidebar-button">
          <FaUser className="sidebar-icon" />
          Vis Profil
        </button>
        <button onClick={handleEditClick} className="sidebar-button">
          <FaEdit className="sidebar-icon" />
          Rediger Profil
        </button>
      </div>

      {/* Sentralisert innhold */}
      <div className="content-container"> {/* Bruk klassenavn for CSS */}
        {isEditing ? (
          <ProfileEdit onClose={handleProfileClick} />
        ) : (
          <div className="profile-details"> {/* Bruk klassenavn for CSS */}
            <h1>Din Profil</h1>
            <p>Navn: {profileData.name}</p>
            <p>E-post: {profileData.email}</p>
            <p>By: {profileData.city}</p>
            <p>Land: {profileData.country}</p>
            <p>Adresse: {profileData.address}</p>
            <p>Fødselsdato: {profileData.birthDate}</p>
            <p>Kjønn: {profileData.gender}</p>
            <p>Beskrivelse: {profileData.description}</p>

            {profileImageUrl && (
              <img src={profileImageUrl} alt="Profile" className="profile-image" /> 
            )}

            <ProfileImageUpload setProfileImageUrl={setProfileImageUrl} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;













