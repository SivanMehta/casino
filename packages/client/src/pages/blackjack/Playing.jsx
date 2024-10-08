import React from 'react';
import Hand from './Hand.jsx';

export default function Playing({ hand, dealer, performAction}) {
  return (
    <div>
      <Hand cards={dealer} dealer={true}/>
      <Hand cards={hand}/>
      <div>
        <button>Hit</button><button>Stand</button>
      </div>
    </div>
  )
}
