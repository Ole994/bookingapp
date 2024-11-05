import useProfile from '../../hooks/useProfile'
const About = () => {
    const { profileData, loading } = useProfile();
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!profileData) {
      return <div>No profile data found.</div>;
    }
  
    return (
      <div className="about-container">
        <h2>About Me</h2>
        <p>{profileData.description}</p>
      </div>
    );
  };
  
  export default About;