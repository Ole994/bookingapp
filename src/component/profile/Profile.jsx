// src/component/profile/Profile.jsx
import useProfile from '../../hooks/useProfile';

const Profile = () => {
  const { profileData, loading } = useProfile();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      <p>City: {profileData.city}</p>
      <p>Country: {profileData.country}</p>
      <p>hh: {profileData.address}</p>
      {/* Legg til flere felt etter behov */}
    </div>
  );
};

export default Profile;
