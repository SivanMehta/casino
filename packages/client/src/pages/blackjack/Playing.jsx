import React from 'react';
import Hand from './Hand.jsx';

export default function Playing({ hand, dealer, performAction}) {
  return (
    <div>
      <pre>
        <Hand cards={dealer} dealer={true}/>
      </pre>
      <pre>
      <Hand cards={hand}/>
      </pre>
    </div>
  )
}
