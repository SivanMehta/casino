import React from 'react';

const root = document.querySelector(':root');

const order = [
  0,
  28,
  9,
  26,
  30,
  11,
  17,
  20,
  32,
  17,
  5,
  22,
  34,
  15,
  3,
  24,
  36,
  13,
  1,
  '00',
  27,
  10,
  25,
  29,
  12,
  8,
  19,
  31,
  18,
  6,
  21,
  33,
  16,
  4,
  23,
  35,
  14,
  2,
];

let spins = 1;

// based on the result, rotate the wheel so that the given
// result is the top most number
export function setSpinAngle(result) {
  const index = order.findIndex(e => e == result);
  const rotation = (3600 * ++spins) - (360/38) * index;
  root.style.setProperty('--roulette-spin-amount', `${rotation}deg`);
  return true;
}

export default function Wheel({ spinning, value }) {
  const className = 'wheel' + (spinning ? ' spin' : '');

  return (
    <div>
      <img className={ className } src='roulette.jpg' />
    </div>
  )
}
