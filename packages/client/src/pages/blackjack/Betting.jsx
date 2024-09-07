import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';

function Buttons({ onClick, disabledAdd, disabledRemove }) {
  return (
    <p>
      <button
        onClick={ () => onClick(10)}
        disabled={disabledAdd}>Add Chips</button>
      <button
        onClick={ () => onClick(-10)}
        disabled={disabledRemove}>Remove Chips</button>
    </p>
  )
}

export default function Betting({ disabled, performAction }) {
  const [ bet, setBet ] = useState(0);
  const [ user ] = useUser();

  function mutateBet(direction) {
    const wager = bet + direction;
    setBet(bet + direction);
  }

  function resetBet() {
    setBet(0);
  }

  const disabledAdd = (bet >= user.balance) || disabled;
  const disabledRemove = (bet == 0) || disabled;

  const action = { data: bet, transition: 'wager' };

  return (
    <>
      <h1>Place your bets!</h1>
      Current Bet: { bet }
      <Buttons
        onClick={mutateBet}
        disabledAdd={disabledAdd}
        disabledRemove={disabledRemove} />
      <button onClick={resetBet}>Reset Wager</button>
      <br />
      <button onClick={() => performAction(action)}>Place Wager</button>
    </>
  )
}
