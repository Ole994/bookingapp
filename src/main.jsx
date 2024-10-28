// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importer AuthProvider
import { initWebSocket } from './webSocketHandler'; // Importer WebSocket-håndtering
import { ErrorProvider } from './component/error/ErrorContext'; 


// Initialiser WebSocket
initWebSocket();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> {/* Pakk App med AuthProvider for å dele autentisering */}
      <ErrorProvider> 
          <App />
        </ErrorProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

