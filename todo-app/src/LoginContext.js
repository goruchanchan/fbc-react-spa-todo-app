import { useState, useContext, createContext } from "react";

const LoginContext = createContext(false);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(false);

  const onLogin = () => setLogin(true);
  const onLogout = () => setLogin(false);

  return (
    <LoginContext.Provider value={{ isLoggedIn, onLogin, onLogout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
