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
    <p>{value}</p>
  )
}

export default function BettingArea({ spin }) {
  const [ bet, setBet ] = useState(10);
  const [ user ] = useUser();

  const disabled = bet > user.balance;

  return (
    <>
      <Table onClick={setBet}/>
      <Bet value={bet} />
      <button onClick={() => spin(10)} disabled={disabled}>Spin Roulette</button>
    </>
  )
}
