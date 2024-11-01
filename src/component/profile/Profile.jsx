import { useState, useEffect } from 'react';
import useProfile from '../../hooks/useProfile';
import ProfileImageUpload from './ProfileImageUpload';

const Profile = () => {
  const { profileData, loading } = useProfile();
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    if (profileData) {
      setProfileImageUrl(profileData.profileImage || ''); // Sett profilbilde-URL
    }
  }, [profileData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Your Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      <p>City: {profileData.city}</p>
      <p>Country: {profileData.country}</p>
      <p>Address: {profileData.address}</p>
      
      <ProfileImageUpload profileImageUrl={profileImageUrl} setProfileImageUrl={setProfileImageUrl} />
    </div>
  );
};

export default Profile;



