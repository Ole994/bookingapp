import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importer Link for navigering
import useProfile from '../../hooks/useProfile';
import ProfileImageUpload from './ProfileImageUpload';

const Profile = () => {
  const { profileData, loading } = useProfile();
  const [profileImageUrl, setProfileImageUrl] = useState(profileData?.profileImage || '');

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

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h3>Sidebar</h3>
        <Link to="/profileEdit" style={{ textDecoration: 'none', color: 'blue' }}>
          <i className="fas fa-edit"></i> Edit Profile
        </Link>
      </div>

      <div style={{ marginLeft: '20px' }}>
        <h1>Your Profile</h1>
        <p>Name: {profileData.name}</p>
        <p>Email: {profileData.email}</p>
        <p>City: {profileData.city}</p>
        <p>Country: {profileData.country}</p>
        <p>Address: {profileData.address}</p>
        <p>Birth Date: {profileData.birthDate || 'No Birth Date'}</p> {/* Nytt felt for fødselsdato */}

        {profileImageUrl && (
          <img src={profileImageUrl} alt="Profile" style={{ width: '100px', height: '100px' }} />
        )}

        <ProfileImageUpload setProfileImageUrl={setProfileImageUrl} />
      </div>
    </div>
  );
};

export default Profile;





