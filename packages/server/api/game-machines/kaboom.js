import fetch from 'node-fetch';
import { decrypt } from '../../db/auth.js';
import { drawFromDeck, API } from './cards.js';
import JSM from 'javascript-state-machine';
import Debug from 'debug';
const debug = Debug('kabbom');

export class Kaboom {
  constructor(opts) {
    this.hands = [[],[]];

    if(opts) {
      Object.assign({}, this, opts);
    }

    this.stateMachine = new JSM({
      init: 'init',
      transitions: [
        { name: 'start', from: 'init', to: 'start' },
        { name: 'draw', from: 'start', to: 'draw' },
        { name: 'decide', from: ''}
      ]
    })
  }

  async getDeck() {
    const newDeck = await fetch(API + '/deck/new/shuffle/?deck_count=6');
    const data = await newDeck.json();
    this.id = data.deck_id;
  }
}
