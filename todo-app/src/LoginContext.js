import { useState, useContext, createContext } from "react";

const LoginContext = createContext(false);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLogin] = useState(false);
  const onSetLogin = () => setLogin(!isLoggedIn);

  return (
    <LoginContext.Provider value={{ isLoggedIn, onSetLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
