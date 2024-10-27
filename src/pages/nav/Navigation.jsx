// src/component/nav/Navigation.jsx
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import runningLogo from "../../images/runningLogo.png";
import { AuthContext } from '../../context/AuthContext';
import '../nav/nav.css';

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false); // State for å styre menyen
  const navigate = useNavigate();

  // Toggler menuOpen når hamburger-ikonet trykkes
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  // Håndterer innlogging og omdirigering til Login-siden
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={runningLogo} alt="Running Logo" className="logo-img" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/administration">Administrasjon</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/calendar">Kalender</Link></li>
        <li><Link to="/confirmation">Bekreftelse</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/error">Error</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        <Link to="/deleteAccount">Delete Account</Link>
      </ul>

      <div className="auth-buttons">
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navigation;
