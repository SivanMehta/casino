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
  return JSON.parse(atob(decodeURIComponent(string)));
}

function stringFromUser(user) {
  return btoa(JSON.stringify(encodeURIComponent(user)));
}

const baseUser = {
  id: null,
  username: "",
  password: "",
  balance: 0
};

const UserContext = createContext(baseUser);
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }) {
  const [ auth, setAuth ] = useState(null);

  useEffect(() => {
    const cookieData = getCookie('auth');
    if(!cookieData) {
      setAuth(null);
    } else {
      setAuth(cookieData);
    }
  }, [ auth, setAuth ]);

  if(!auth) {
    return <Login />;
  }

  const userData = userFromString(auth);
  function setUser(user) {
    setAuth(stringFromUser(user));
  }

  return (
    <UserContext.Provider value={[
      userData, setUser
    ]}>
      { children }
      <pre>
          { JSON.stringify(userData, null, 2)}
      </pre>
    </UserContext.Provider>
  )
}
