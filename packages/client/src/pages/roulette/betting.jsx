import React, { useState } from 'react';
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

export default function BettingArea() {
  const [ bet, setBet ] = useState(false);

  return (
    <>
      <Table onClick={setBet}/>
      <Bet value={bet} />
    </>
  )
}
