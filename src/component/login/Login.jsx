import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import '../../component/login/login.css';

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Hvis brukeren allerede er logget inn, send dem til hjemmesiden
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleFirebaseLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      login({ email: user.email, name: user.displayName || 'Firebase User' });
      setSuccess("Innlogging var vellykket!");
      navigate('/'); // Naviger umiddelbart
    } catch (err) {
      console.error('Error logging in with Firebase:', err.message);
      setError("Kunne ikke logge inn. Vennligst sjekk e-post og passord og prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  const handleTestLogin = (e) => {
    e.preventDefault();
    const userData = { email, name: 'Test User' };
    login(userData);
    navigate('/');
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
              disabled={loading} // Deaktivert under innlasting
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
              disabled={loading} // Deaktivert under innlasting
            />
          </div>
          <button type="submit" className="primary-button" disabled={loading}>
            {loading ? "Logger inn..." : "Logg inn"}
          </button>
        </form>

        <div className="separator">eller</div>

        <button onClick={handleTestLogin} className="secondary-button">
          Logg inn med testbruker
        </button>
      </div>
    </div>
  );
};

export default Login;
