import { useState, useContext, createContext } from "react";

const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(false);

  const onLogin = () => setLogin(true);
  const onLogout = () => setLogin(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
