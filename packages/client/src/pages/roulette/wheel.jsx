import React from 'react';

export default function Wheel({ spinning }) {
  const className = 'wheel' + (spinning ? ' spin' : '');

  return (
    <p className={ className }>🍩</p>
  )
}
