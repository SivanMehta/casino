import {useState, useEffect} from 'react';

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

export function useUser() {
  const [authorization, setAuthorization] = useState(false);

  // replace localstorage with a cookie
  useState(async () => {
    const user = localStorage.getItem('user');
    if(!user) {
      setAuthorization(false);
    }
    setAuthorization(user);

  }, [authorization]);

  return authorization;
}
