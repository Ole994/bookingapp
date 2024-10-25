import { useNavigate } from 'react-router-dom';
import "./error.css";


const Error = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); // Naviger tilbake til hovedsiden
  };

  return (
    <div className="error-page">
      <h1>404 - Siden ble ikke funnet</h1>
      <p>Beklager, men siden du prøver å få tilgang til eksisterer ikke.</p>
      <button onClick={goHome}>Tilbake til Hjem</button>
    </div>
  );
};

export default Error;
