import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider Component
export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  // When the app loads, check if the user is already logged in via localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('userInfo'); // Remove token from browser
    setUserInfo(null); // Clear global state
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to use the Auth Context easily in any component
export const useAuth = () => useContext(AuthContext);