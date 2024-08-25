import React, { useState } from 'react';

import BettingArea from './betting.jsx';
import Wheel from './wheel.jsx';
import timer from '../../hooks/timer.js';
import { useUser } from '../../hooks/useUser.jsx';

export default function Roulette() {
  const [ spinning, setSpinning ] = useState(false);
  const [ user, setUser ] = useUser();

  async function spin(amount) {
    if(amount > user.balance) {
      return;
    }

    setSpinning(true);
    const res = await fetch('/roulette', {
      method: 'POST',
      body: JSON.stringify({ amount, on: 'black' }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let updatedUser;
    if(res.ok) {
      updatedUser = await res.json();
    } else {
      console.error(await res.status);
    }

    setUser(updatedUser);
    setSpinning(false);
  }

  return (
    <>
      <BettingArea spin={ spin }/>
      <Wheel spinning={spinning}/>
    </>
  )
}
