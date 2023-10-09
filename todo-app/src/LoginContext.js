import { useState, useContext, createContext } from "react";

const LoginContext = createContext(false);

export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const onSetLogin = () => setLogin(!login);

  return (
    <LoginContext.Provider value={{ login, onSetLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
