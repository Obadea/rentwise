import React, { createContext, useContext, useEffect, useState } from "react";
import {
  clearAuthData,
  getAuthData,
  setAuthData,
  STORAGE_KEY,
} from "./helperFunction";
const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // Initialize auth state from localStorage on app load
  useEffect(() => {
    const authData = getAuthData();
    if (authData) {
      setToken(authData.token);
      setUser(authData.user);
    }
  }, []);

  // Login function to set token and user data
  const login = (data) => {
    setAuthData(data); // Save to localStorage with expiry
    setToken(data.token); // Update state
    setUser(data.data.user); // Update user state
  };

  // Logout function to clear token and user data
  const logout = () => {
    clearAuthData(); // Remove from localStorage
    setToken(null); // Clear state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
