import React from 'react';
import { useLoaderData, redirect } from 'react-router-dom';
import { useGame } from '../constants';
import Board from '../components/Board';
import Message from '../components/Message';

export async function gameLoader({ params }) {
  console.log('fetching info for game', params.gameId);
  const data = await fetch('/api/game/' + params.gameId)
    .then((res) => res.json());

  if(params.gameId === 'new') {
    return redirect('/game/' + data.gameId);
  } else {
    return data;
  }
}

function Game() {
  const [game] = useGame();
  return (
    <div className="grid">
      {/* <Board />
      <Message /> */}
      <pre>
        {JSON.stringify(game, null, 2)}
      </pre>
    </div>
  );
};

export default Game;
