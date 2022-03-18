import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userToken, setUserToken] = useState("");

  const toggleAuth = (loginStatus, token) => {
    setIsAuth(loginStatus);
    setUserToken(loginStatus ? token : "");
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
