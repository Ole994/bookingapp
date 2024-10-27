// src/pages/login/Login.jsx
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, name: 'Test User' }; // Testdata for bruker
    login(userData);
    navigate('/'); // Send brukeren til hovedsiden etter innlogging
  };

  // Ny funksjon som håndterer Firebase-innlogging
  const handleFirebaseLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    
    try {
      // Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Kall på `login` fra AuthContext med ekte brukerdata
      login({ email: user.email, name: user.displayName || 'Firebase User' });
      
      setSuccess("Innlogging var vellykket!");
      setTimeout(() => navigate('/'), 2000); // Naviger til hovedsiden etter en kort forsinkelse
    } catch (err) {
      console.error('Error logging in with Firebase:', err.message);
      setError("Kunne ikke logge inn. Vennligst sjekk e-post og passord og prøv igjen.");
    }
  };

  return (
    <div className="login-container">
      <h2>Logg inn</h2>
      
      {/* Vis suksess- eller feilmelding */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      
      <form onSubmit={handleFirebaseLogin}>
        <div>
          <label>E-post:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Passord:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Logg inn med Firebase</button>
      </form>

      <p>-- eller --</p>

      {/* Eksisterende funksjon for testinnlogging */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Logg inn med testbruker</button>
      </form>
    </div>
  );
};

export default Login;
