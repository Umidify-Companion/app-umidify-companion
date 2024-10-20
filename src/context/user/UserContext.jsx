import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    name: 'Desenvolvedor',
    email: '',
    profileImage: ''
  });

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const clearUser = () => {
    setUser({
      id: '',
      name: '',
      email: '',
      profileImage: ''
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
