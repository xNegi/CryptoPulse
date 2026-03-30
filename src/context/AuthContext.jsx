import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem("isLoggedin") === "true");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const login = (userData) => {
    setIsLoggedin(true);
    setUser(userData);
    localStorage.setItem("isLoggedin", "true");
    localStorage.setItem("user", JSON.stringify(userData));
  }; 
  const logout = () => {
    setIsLoggedin(false);
    setUser(null);
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("user");
    alert("User has been logged out successfully");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedin, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
