// src/pages/login/Login.jsx
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, name: 'Test User' }; // Testdata for bruker
    login(userData);
    navigate('/'); // Send brukeren til hovedsiden etter innlogging
  };

  return (
    <div className="login-container">
      <h2>Logg inn</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Logg inn</button>
      </form>
    </div>
  );
};

export default Login;


