import React from 'react';

export default function Hand({ cards, dealer }) {
  let hand = cards.concat();
  if(dealer) {
    hand.unshift('back');
  }
  const images = hand.map((card, i) => {
    const url = card == 'back' ?
      'https://www.deckofcardsapi.com/static/img/back.png' :
      `https://www.deckofcardsapi.com/static/img/${card}.png`;

    return (
      <image
        key={card + i}
        x={i * 35}
        y="0"
        width="225"
        height="310"
        href={url}
      />
    )
  });

  return (
    <svg width="310" height="310">
      { images }
    </svg>
  )
}
