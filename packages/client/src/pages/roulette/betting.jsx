import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import Table from './table.jsx';

function Bet({ value }) {
  if(!value) {
    return (
      <p>no bet set</p>
    );
  }

  return (
    <p>{JSON.stringify(value, null, 2)}</p>
  )
}

function ChipDirection({ enabled, onChange }) {

  const label = enabled ? "Adding Chips" : "Removing Chips"

  return (
    <div>
      <input
        type="checkbox"
        name="adding"
        checked={enabled}
        onChange={ () => onChange(!enabled) }/>
      <label htmlFor="adding">{label}</label>
    </div>
  )
}

export default function BettingArea({ spin, spinning }) {
  const [ bet, setBet ] = useState({});
  const [ user ] = useUser();
  const [ adding, setAdding ] = useState(true);

  const disabled = !bet || spinning || (bet > user.balance);

  function mutateBet(value) {
    let wager = bet;
    const direction = adding ? 1 : -1;

    if(wager[value]) {
      // place/remove chips
      wager[value] += direction;
    } else {
      // either create or bottom out a pile that doesn't exist
      wager[value] = adding ? direction : 0;
    }

    console.log(wager);
    setBet(wager);
  }

  return (
    <>
      <Table onClick={mutateBet}/>
      <ChipDirection enabled={adding} onChange={setAdding} />
      <Bet value={bet} />
      <button onClick={() => spin(bet)} disabled={disabled}>Spin Roulette</button>
    </>
  )
}
