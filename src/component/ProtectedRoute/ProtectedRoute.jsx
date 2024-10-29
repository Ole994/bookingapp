// src/component/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // Log brukertilstanden for feilsøking
  console.log("ProtectedRoute: Current user =", user);

  if (!user) {
    console.log("ProtectedRoute: User not authenticated, redirecting to login.");
    // Hvis brukeren ikke er logget inn, send dem til login-siden
    return <Navigate to="/login" replace />;
  }

  console.log("ProtectedRoute: User authenticated, rendering children.");
  // Hvis brukeren er logget inn, returner komponentene (children)
  return children;
};

// Legg til prop-types validering
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
