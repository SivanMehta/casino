import fetch from 'node-fetch';

const API = 'https://www.deckofcardsapi.com/api/';

export default class Blackjack {
  constructor() {
    this.hand = [];
    this.dealer = [];
  }
  
  async start() {
    const res = await fetch(API + 'deck/new/shuffle/?deck_count=6');
    const data = await res.json();
  
    this.id = data.deck_id;
  }

  async deal(cards) {

  }
}

export function hit(req, res) {
  
}

export function stay(req, res) {
  
}
