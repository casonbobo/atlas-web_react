import React, { useState } from 'react';


const [user, setUser] = useState({
  email: '',
  password: '',
  isLoggedIn: false,
});

const defaultLogOut = () => {
  setUser({
    email: '',
    password: '',
    isLoggedIn: false,
  });
};

const AppContext = React.createContext({
  user: setUser,
  logOut: defaultLogOut,
});
