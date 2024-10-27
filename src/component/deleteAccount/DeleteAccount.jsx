// src/component/DeleteAccount.jsx
import { useState, useContext } from 'react';
import { auth } from '../../firebaseConfig';
import { deleteUser, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext for å få tilgang til logout-funksjonen

const DeleteAccount = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { logout } = useContext(AuthContext); // Hent logout-funksjonen fra AuthContext
  const navigate = useNavigate();

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Sjekk om passordene samsvarer
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    const user = auth.currentUser;

    // Sjekk om brukeren er logget inn
    if (user) {
      const credential = EmailAuthProvider.credential(user.email, password);

      try {
        // Re-autentiser brukeren
        await reauthenticateWithCredential(user, credential);

        // Hvis re-autentisering er vellykket, slett brukeren
        await deleteUser(user);
        setSuccess("Your account has been deleted successfully.");
        console.log("User account deleted successfully");

        // Kall logout-funksjonen for å logge ut brukeren etter sletting
        logout();

        // Naviger tilbake til forsiden etter kort tid, slik at brukeren ser suksessmeldingen
        setTimeout(() => navigate("/"), 2000);
      } catch (error) {
        console.error("Error deleting account:", error.message);

        // Håndter spesifikke feil for bedre tilbakemelding til brukeren
        if (error.code === "auth/wrong-password") {
          setError("The password is incorrect. Please try again.");
        } else {
          setError("An error occurred while deleting your account. Please try again later.");
        }
      }
    } else {
      setError("No user is currently logged in.");
    }
  };

  return (
    <div>
      <h2>Delete Account</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleDeleteAccount}>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Delete Account</button>
      </form>
    </div>
  );
};

export default DeleteAccount;
