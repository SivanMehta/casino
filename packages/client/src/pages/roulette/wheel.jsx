import React from 'react';

export default function Wheel({ spinning, value }) {
  const className = 'wheel' + (spinning ? ' spin' : '');

  return (
    <div>
      <img className={ className } src='roulette.jpg' />
    </div>
  )
}
