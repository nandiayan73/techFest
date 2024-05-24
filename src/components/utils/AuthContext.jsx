import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const [isLoginChecked, setIsLoginChecked] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("https://fest-backend-wr4i.onrender.com/api/v1/users/current-user");
        if (response.data.success) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
        setIsLoggedIn(false);
      } finally {
        setIsLoginChecked(true);
      }
    };

    
    if (location.pathname === "/" && !isLoginChecked) {
      checkLoginStatus();
    }
  }, [location, isLoginChecked]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
