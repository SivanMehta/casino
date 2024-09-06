import fetch from 'node-fetch';

const API = 'https://www.deckofcardsapi.com/api/';

async function draw(id, count) {
  const res = await fetch(
    `${API}/deck/${id}/draw/?count=${count}`
  );
  const { cards } = await res.json();
  const values = cards.map(card => card.code);
  return values;
}


export default class Blackjack {
  constructor() {
    this.hand = [];
    this.dealer = [];
  }
  
  async start() {
    const newDeck = await fetch(API + 'deck/new/shuffle/?deck_count=6');
    const data = await newDeck.json();
  
    this.id = data.deck_id;
    const cards = await draw(this.id, 3);
    console.log(cards);
    this.hand.push(cards[0], cards[1]);
    this.dealer.push(cards[2]);
  }
}

export function hit(req, res) {
  
}

export function stay(req, res) {

}
