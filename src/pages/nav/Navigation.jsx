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

  // Lukker menyen når en lenke klikkes i mobilvisning
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
    }
  };

  // Håndterer innlogging og omdirigering til Login-siden
  const handleLoginClick = () => {
    navigate('/login');
    handleLinkClick(); // Lukker menyen på små skjermer
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={runningLogo} alt="Running Logo" loading="lazy" className="logo-img" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/administration" onClick={handleLinkClick}>Administrasjon</Link></li>
        <li><Link to="/booking" onClick={handleLinkClick}>Booking</Link></li>
        <li><Link to="/calendar" onClick={handleLinkClick}>Kalender</Link></li>
        <li><Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link></li>
        <li><Link to="/signup" onClick={handleLinkClick}>Sign up</Link></li>
        <li><Link to="/deleteAccount" onClick={handleLinkClick}>Delete Account</Link></li>
        <li><Link to="/profile" onClick={handleLinkClick}>profile</Link></li>
      </ul>

      <div className="auth-buttons">
        {user ? (
          <button onClick={() => { logout(); handleLinkClick(); }}>Logout</button>
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
