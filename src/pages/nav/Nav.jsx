import  { useState } from 'react';
import { Link } from 'react-router-dom'; // Importer Link fra react-router-dom
import runningLogo from "../../images/runningLogo.png";


const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>

      <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={runningLogo} alt="Apple Logo" className="logo-img" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/administration">Administrasjon</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/calendar">Kalender</Link></li>
        <li><Link to="/confirmation">Bekreftelse</Link></li>
        <li><Link to="/dashboard ">Dashboard</Link></li>
        <li><Link to="/error">error</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>

      <div className="auth-buttons">
        {isLoggedIn ? (
          <button onClick={toggleLogin}>Logout</button>
        ) : (
          <button onClick={toggleLogin}>Login</button>
        )}
      </div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</div>
    </nav>


      </div>

    </>
  );
};

export default Navigation;
