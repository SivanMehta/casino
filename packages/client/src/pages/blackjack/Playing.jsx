import React from 'react';

export default function Playing({ hand, dealer, performAction}) {
  return (
    <div>
      <pre>
        { JSON.stringify(dealer)}
      </pre>
      <pre>
        { JSON.stringify(hand)}
      </pre>
    </div>
  )
}
