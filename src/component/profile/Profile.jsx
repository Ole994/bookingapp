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

  const handleCloseEdit = () => {
    setIsEditing(false); // Sett redigeringstilstand til false
  };

  return (
    <div className="profile-wrapper">
  <div className="sidebar">
    <button onClick={handleCloseEdit} className="sidebar-button">
      <FaUser className="sidebar-icon" />
      Vis Profil
    </button>
    <button onClick={handleEditClick} className="sidebar-button">
      <FaEdit className="sidebar-icon" />
      Rediger Profil
    </button>
  </div>

  <div className="profile-content-container">
    {isEditing ? (
      <ProfileEdit
        onClose={handleCloseEdit}
        profileData={profileData}
        profileImageUrl={profileImageUrl}
      />
    ) : (
      <div className="profile-view">
        <div className="profile-img-div">
          {profileImageUrl && (
            <img src={profileImageUrl} alt="Profile" className="profile-img" />
          )}
        </div>
<h1>Din Profil</h1>
        <div className="profile-grid-content">
          
          <div className="grid-main-content">
            <h3>Navn:</h3>
            <p>{profileData.name}</p>
          </div>
          <div className="grid-main-content">
            <h3>email:</h3>
            <p>{profileData.email}</p>
          </div>
          <div className="grid-main-content">
            <h3>Telefonnummer:</h3>
            <p>{profileData.phone}</p>
          </div>
          <div className="grid-main-content">
            <h3>addresse:</h3>
            <p>{profileData.address}</p>
          </div>
          <div className="grid-main-content">
            <h3>Postnummer:</h3>
            <p>{profileData.postalCode}</p>
          </div>
          <div className="grid-main-content">
            <h3>postaddresse:</h3>
            <p>{profileData.postalPlace}</p>
          </div>
          <div className="grid-main-content">
            <h3>By:</h3>
            <p>{profileData.city}</p>
          </div>
          <div className="grid-main-content">
            <h3>Land:</h3>
            <p>{profileData.country}</p>
          </div>
          <div className="grid-main-content">
            <h3>Bursdag:</h3>
            <p>{profileData.birthDate}</p>
          </div>
          <div className="grid-main-content">
            <h3>Kjønn:</h3>
            <p>{profileData.gender}</p>
          </div>
        </div>

        <ProfileImageUpload setProfileImageUrl={setProfileImageUrl} />
      </div>
    )}
  </div>
</div>

  );
};

export default Profile;















