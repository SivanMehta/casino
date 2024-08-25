import React, { useState } from 'react';

import BettingArea from './betting.jsx';
import Wheel from './wheel.jsx';
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

    setSpinning(true);
    const [, res] = await Promise.all([
      // must take at least 1.5 seconds
      timer(5000),
      fetch('/roulette', {
        method: 'POST',
        body: JSON.stringify(wager),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ]);
    if(res.ok) {
      const { winnings, result } = await res.json();
      setValue(result);
      setUser({ balance: user.balance + winnings });
    } else {
      console.error(await res.status);
    }

    setSpinning(false);
  }

  return (
    <>
      <BettingArea spin={ spin } spinning={ spinning }/>
      <Wheel spinning={spinning} value={value}/>
    </>
  )
}
