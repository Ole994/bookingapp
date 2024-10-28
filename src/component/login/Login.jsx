// src/pages/login/Login.jsx
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../../component/login/login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, name: 'Test User' };
    login(userData);
    navigate('/');
  };

  const handleFirebaseLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      login({ email: user.email, name: user.displayName || 'Firebase User' });
      setSuccess("Innlogging var vellykket!");
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      console.error('Error logging in with Firebase:', err.message);
      setError("Kunne ikke logge inn. Vennligst sjekk e-post og passord og prøv igjen.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 className="login-title">Logg inn</h2>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <form onSubmit={handleFirebaseLogin} className="login-form">
          <div className="input-group">
            <label htmlFor="email">E-post:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Passord:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="primary-button">Logg inn</button>
        </form>

        <div className="separator">eller</div>

        <form onSubmit={handleSubmit} className="login-form">
          <button type="submit" className="secondary-button">Logg inn med testbruker</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
