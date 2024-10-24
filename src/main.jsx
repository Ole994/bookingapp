import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx'; // Riktig filtype for JSX



// Opprett en root for å koble React til HTML-filen
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Pakk appen med AuthProvider for å gi tilgang til autentiseringskonteksten */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
