// src/context/ErrorContext.jsx
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const ErrorContext = createContext();

export const useError = () => {
  return useContext(ErrorContext);
};

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const showError = (message) => {
    setError(message);
    console.error("App Error:", message);
  };

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, showError, clearError }}>
      {children}
      {error && (
        <div className="error-popup">
          <p>{error}</p>
          <button onClick={clearError}>Lukk</button>
        </div>
      )}
    </ErrorContext.Provider>
  );
};

// Legg til PropTypes validering
ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorContext;
