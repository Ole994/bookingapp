import PropTypes from 'prop-types';

const ProfileForm = ({ profileData, setProfileData, isEditing, setIsEditing, uploadProfileImage }) => {
    return (
        <form>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    disabled={!isEditing}
                />
            </div>
            {/* ... andre input-felter ... */}
            <div>
                <label>Profile Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => uploadProfileImage(e.target.files[0])} // Kall uploadProfileImage her
                    disabled={!isEditing}
                />
            </div>
            <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
        </form>
    );
};

ProfileForm.propTypes = {
    profileData: PropTypes.object.isRequired,
    setProfileData: PropTypes.func.isRequired,
    isEditing: PropTypes.bool.isRequired,
    setIsEditing: PropTypes.func.isRequired,
    uploadProfileImage: PropTypes.func.isRequired, // Sørg for at denne er inkludert
};

export default ProfileForm;

