import React, { useEffect, useState } from 'react';
import { Link,
  useLoaderData,
  useNavigate,
  useParams,
  redirect,
} from 'react-router-dom';
import Betting from './Betting.jsx';
import Playing from './Playing.jsx';

export default function Blackjack() {
  const { id } = useParams();
  const game = useLoaderData();

  async function performAction(data) {
    const res = await fetch(`/api/blackjack/${id}/move`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    if(res.ok) {
      location.reload();
    }
  }

  if(!id) {
    return (
      <Link to='/blackjack/new'>Start New Game</Link>
    )
  }

  if(game.state == 'start') {
    return (
      <Betting performAction={performAction} /> 
    )
  }

  if(game.state == 'playing') {
    return (
      <Playing
        hand={game.hand}
        dealer={game.dealer}
        performAction={performAction} />
    )
  }

  return (
    <>
      <pre>{JSON.stringify(game, null, 2)}</pre>
    </>
  );
}
