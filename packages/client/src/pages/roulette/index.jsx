import React, { useState } from 'react';

import BettingArea from './betting.jsx';
import Wheel, { setSpinAngle } from './wheel.jsx';
import timer from '../../hooks/timer.js';
import { useUser } from '../../hooks/useUser.jsx';

export default function Roulette() {
  const [ spinning, setSpinning ] = useState(false);
  const [ user, setUser ] = useUser();
  const [ value, setValue ] = useState(0);

  async function spin(wager) {
    const total = Object
      .values(wager)
      .reduce((acc, cur) => acc + cur, 0) * 10;

    const res = await fetch('/roulette', {
      method: 'POST',
      body: JSON.stringify(wager),
      headers: {
        "Content-Type": "application/json",
      },
    });

    
    if(res.ok) {
      const { winnings, result } = await res.json();
      setSpinning(setSpinAngle(result));
      await timer(5000);
  
      setUser({ balance: user.balance + winnings });
      setSpinning(false);
    } else {
      console.error(await res.status);
    }
    
  }

  return (
    <>
      <BettingArea spin={ spin } spinning={ spinning }/>
      <Wheel spinning={spinning} value={value}/>
    </>
  )
}
