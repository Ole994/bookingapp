// src/context/AuthContext.jsx
//Nr 1 AuthProvider er en spesialkomponent som pakker inn komponentene
// som trenger tilgang til autentiseringskonteksten.
// Den fungerer som en "leverandør" (provider) for dataen i AuthContext.
// Nr 2 const [user, setUser] = useState(null);
//  oppretter en user-state, som vil holde data 
//  om den innloggede brukeren. Når user er null, 
//  betyr det at ingen er logget inn. Når user inneholder data,
//  betyr det at en bruker er logget inn.
//  user Innloggingsfunksjonen (login):
// 3 . Innloggingsfunksjon. login er en funksjon som oppdaterer user-state med 
// informasjonen til brukeren.
//  Denne funksjonen kan kalles fra andre komponenter
// for å sette innloggingsdata. F.eks., når en bruker logger inn, kan login ta en userData-parameter (f.eks. e-post og navn) og oppdatere user med disse dataene.
// 4 . Utloggingsfunksjonen (logout):
// logout er en funksjon som setter user til null,
//  noe som tilsvarer å logge ut brukeren. Når user settes til null, vil andre komponenter som bruker user kunne se at ingen er logget inn.
// 5.  Returnere AuthContext.Provider:
// AuthContext.Provider er en spesiell komponent som
//  kommer fra React sin konteksts API.
//   Den deler ut value-propen til alle 
//   komponentene som er pakket inn i AuthProvider.
// value={{ user, login, logout }}: value er objektet
//  som blir delt ut til komponentene.
//   Det inkluderer user (innloggingsstatus og brukerdata), 
//   login (innloggingsfunksjonen), og logout (utloggingsfunksjonen).
// Når AuthProvider pakkes rundt App i main.jsx,
//  får alle komponenter under App tilgang til user, login, og logout.
// src/context/AuthContext.jsx
// src/context/AuthContext.jsx
// src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes
import { auth } from '../utils/firebaseConfig'; // Importer Firebase-authentisering
import { onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Innloggingsfunksjon
  const login = (userData) => {
    setUser(userData);
  };

  // Utloggingsfunksjon
  const logout = () => {
    setUser(null);
  };

  // Sett opp vedvarende pålogging og lyt etter endringer i autentiseringstilstand
  useEffect(() => {
    // Sett vedvarende sesjon til localStorage
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        // Overvåk autentiseringstilstanden
        onAuthStateChanged(auth, (firebaseUser) => {
          if (firebaseUser) {
            // Bruker er innlogget, sett brukerdata
            setUser({ email: firebaseUser.email, name: firebaseUser.displayName || 'Firebase User' });
          } else {
            // Ingen bruker er innlogget
            setUser(null);
          }
        });
      })
      .catch((error) => {
        console.error('Error setting persistence:', error);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Legg til prop-types validering for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Definerer at children er påkrevd
};

// Custom hook for å enklere hente ut autentiseringsdata
export const useAuth = () => {
  return useContext(AuthContext);
};
