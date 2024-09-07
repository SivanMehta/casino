import React, { useEffect, useState } from 'react';
import { Link, useParams, redirect, useLoaderData } from 'react-router-dom';
import Hand from './Hand.jsx';

export default function Blackjack() {
  const { id } = useParams();
  const { state } = useLoaderData();

  if(!id) {
    return (
      <Link to='/blackjack/new'>Start New Game</Link>
    )
  }

  if(state == 'start') {
    return (
      <p>
        Place your bets!
      </p>
    )
  }

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}
