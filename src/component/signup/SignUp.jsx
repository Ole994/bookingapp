// src/component/signup/SignUp.jsx
import { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // Ny state for suksessmelding

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null); // Tilbakestiller error ved hver innsending
    setSuccess(null); // Tilbakestiller suksessmelding ved hver innsending

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('User registered successfully!'); // Setter suksessmeldingen
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message); // Setter feilmeldingen
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Viser feilmeldingen */}
      {success && <p style={{ color: 'green' }}>{success}</p>} {/* Viser suksessmeldingen */}

      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
