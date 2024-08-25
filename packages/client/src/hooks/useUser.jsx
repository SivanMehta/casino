import React, { createContext, useState, useContext, useEffect } from 'react';
import { Login } from '../pages/Login.jsx';

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function userFromString(string) {
  return JSON.parse(btoa(string));
}

function stringFromUser(user) {
  return atob(JSON.stringify(user));
}

const baseUser = {
  id: null,
  username: "",
  password: "",
  balance: 0
};

const UserContext = createContext(baseUser);
export const useUser = useContext(UserContext);

export function UserProvider({ children }) {
  const [ user, setUser ] = useState(false);

  useEffect(() => {
    const auth = getCookie('auth');
    if(!auth) {
      setUser(false);
    }

    setUser(userFromString(auth));
  });

  if(!user) {
    return <Login />
  }

  return (
    <UserContext.Provider value={[ user, setUser ]}>
      { children }
    </UserContext.Provider>
  )
}
