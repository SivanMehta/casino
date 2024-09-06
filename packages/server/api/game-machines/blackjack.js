import fetch from 'node-fetch';
import { drawFromDeck, API } from './cards.js';

export class Blackjack {
  constructor(opts) {
    if(opts) {
      this.hand = opts.hand;
      this.dealer = opts.dealer;
      this.id = opts.id;
    } else {
      this.hand = [];
      this.dealer = [];
    }
  }
  
  async start() {
    const newDeck = await fetch(API + 'deck/new/shuffle/?deck_count=6');
    const data = await newDeck.json();
    this.id = data.deck_id;

    // game starts with 3 cards dealt
    const cards = await drawFromDeck(this.id, 3);
    this.hand.push(cards[0], cards[1]);
    this.dealer.push(cards[2]);

    this.stage = 0;
  }

  serialize() {
    return {
      hand: this.hand,
      dealer: this.dealer,
      id: this.id
    }
  }
}

export function proceed(req, res) {
  // lookup game, unserialize game
  // transition between game states given the player's move
  
  // perhaps use a state machine to help determine gameplay loop
  // https://www.npmjs.com/package/javascript-state-machine
  res.send(200);
}
