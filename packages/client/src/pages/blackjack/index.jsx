import React, { useEffect, useState } from 'react';
import { Link, useParams, redirect, useLoaderData } from 'react-router-dom';

export default function Blackjack() {
  const { id } = useParams();
  const state = useLoaderData();

  if(!id) {
    return (
      <Link to='/blackjack/new'>Start New Game</Link>
    )
  }

  return (
    <>
      <p>
        Game ID: { id }
      </p>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}
