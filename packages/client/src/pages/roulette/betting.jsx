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
    <div>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <p>${ 10 * Object.values(value).reduce((acc, cur) => acc + cur, 0)}</p>
    </div>
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
  const [ tick, setTick ] = useState(1);
  const [ user ] = useUser();
  const [ adding, setAdding ] = useState(true);

  const disabled = !bet || spinning || (bet > user.balance);

  function mutateBet(value) {
    let wager = bet;
    const direction = adding ? 1 : -1;

    if(bet[value]) {
      // place/remove chips
      wager[value] += direction;
      if(wager[value] == 0) {
        delete wager[value];
      }
    } else {
      // create a pile that doesn't exist
      if(adding) {
        wager[value] = direction;
      }
    }

    setBet(wager);
    setTick(tick + 1);
  }

  function resetBet () {
    setBet({});
  }

  return (
    <>
      <Table onClick={mutateBet}/>
      <ChipDirection enabled={adding} onChange={setAdding} />
      <Bet value={bet} />
      <button onClick={() => spin(bet)} disabled={disabled}>Spin Roulette</button>
      <button onClick={resetBet}>Reset Wager</button>
    </>
  )
}
