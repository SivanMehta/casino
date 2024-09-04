import React from 'react';
import { Link } from 'react-router-dom';

function Landing () {
  return (
    <>
      <h1>Casino</h1>
      <ul>
        <li><Link to="/roulette">Roulette</Link></li>
        <li><Link to="/blackjack">Blackjack</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </>
  )
}

export default Landing;
