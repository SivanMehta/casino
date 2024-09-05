import React, { useEffect, useState } from 'react';
import { Link, useParams, redirect, useLoaderData } from 'react-router-dom';

export default function Blackjack() {
  const { game } = useParams();
  const state = useLoaderData();

  if(!game) {
    return (
      <Link to='/blackjack/new'>Start New Game</Link>
    )
  }

  return (
    <>
      <p>
        Game ID: { game }
      </p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}
