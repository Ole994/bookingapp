// src/main.jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importer AuthProvider


// Pakk appen med AuthProvider og BrowserRouter for kontekst og ruter
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Pakk App med AuthProvider for å dele autentisering */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
