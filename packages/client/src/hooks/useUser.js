import {useState, useEffect} from 'react';

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

export function useUser() {
  const [authorization, setAuthorization] = useState(false);

  // replace localstorage with a cookie
  useState(async () => {
    const auth = getCookie('auth');
    if(!auth) {
      setAuthorization(false);
    }
    setAuthorization(auth);

  }, [authorization]);

  return authorization;
}
