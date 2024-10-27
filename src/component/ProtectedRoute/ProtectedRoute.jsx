// src/component/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Hvis brukeren ikke er logget inn, send dem til login-siden
    return <Navigate to="/login" replace />;
  }

  // Hvis brukeren er logget inn, returner komponentene (children)
  return children;
};

// Legg til prop-types validering
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
