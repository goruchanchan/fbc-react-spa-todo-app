import { useState, useContext, createContext } from "react";

const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => setIsLoggedIn(true);
  const onLogout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
