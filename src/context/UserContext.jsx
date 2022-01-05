import { useContext, createContext, useState } from 'react';
import { useHistory } from "react-router-dom";

const UserContext = createContext();

// make a provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const history = useHistory();

  const login = (name, password) => {
    const loginSuccessful =
      name === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;
    if (loginSuccessful) setUser(name);
    return loginSuccessful;
  };

  const logout = () => {
    setUser('');
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// make a customer hook
const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('call useUser hook within a UserContext Provider');
  }
  return context;
};

// export the custom hook and the provider?

export { UserProvider, useUser };
