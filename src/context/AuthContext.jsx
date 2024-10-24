// src/context/AuthContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes for validering

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Prop-types validering
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,  // Definerer at children er påkrevd
};

