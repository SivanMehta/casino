import fetch from 'node-fetch';
import { decrypt } from '../../db/auth.js';
import { drawFromDeck, API } from './cards.js';
import JSM from 'javascript-state-machine';
import Debug from 'debug';
const debug = Debug('blackjack')

function countHand(hand) {
  const count = hand
    .map(card => +card.substring(0, 1))
    .reduce((a, b) => a + b, 0);
}

export class Blackjack {
  constructor(opts) {
    this.hand = [];
    this.dealer = [];

    if(opts) {
      Object.assign({}, this, opts);
    }
    
    this.wager = this.wager.bind(this);
    this.stateMachine = new JSM({
      init: 'start',
      transitions: [
        { name: 'wager', from: 'start', to: 'playing' },
        { name: 'deal',  from: 'playing', to: 'playing'},
        { name: 'hit',   from: 'playing', to: 'playing' },
        { name: 'stand', from: 'playing', to: 'playing' },
        // tie just restarts the game
        { name: 'tie',   from: 'playing', to: 'start'},
        { name: 'bust',  from: 'playing', to: 'gameOver'},
        { name: 'win',   from: 'playing', to: 'gameOver'},
        // no splitting or surrendering for now
      ],
      methods: {
        onWager: this.wager,
        onDeal: this.deal,
        onHit: this.hit,
        onStand: this.stand,
        onTie: this.tie,
        onBust: this.bust,
        onWin: this.win
      }
    });
  }

  async getDeck() {
    const newDeck = await fetch(API + '/deck/new/shuffle/?deck_count=6');
    const data = await newDeck.json();
    this.id = data.deck_id;
  }

  async wager(transition, bet) {
    // lock in the wager and then deal out the initial hand
    this.bet = bet;
    
    const cards = await drawFromDeck(this.id, 3);
    debug('post-wager:', cards);

    this.hand.push(cards[0], cards[1]);
    this.dealer.push(cards[2]);
  }

  // add a card to your own and see if you bust
  async hit() {
    const cards = await drawFromDeck(this.id, 1);
    this.hand.push(cards[0])

    if(countHand(this.hand) > 21) {
      this.stateMachine.bust();
    }
  }

  // compare your hand with the dealer
  async stay() {
    const handCount = countHand(this.hand);
    const dealerCount = countHand(this.dealer);

    if(handCount == delearCount) {
      this.stateMachine.tie();
    } else if(handCount < dealerCount) {
      this.stateMachine.bust();
    } else {
      this.stateMachine.win();
    }
  }

  tie () {
    this.bet = 0;
  }

  bust() {
    // remove 
    console.log('You Lose =(((');
  }

  win() {
    console.log('You win =)))');
  }

  serialize() {
    // we don't want to reveal the dealer's card until the game is over
    let dealer = [];
    if(this.stateMachine.state != 'gameover') {
      dealer = this.dealer.slice(0, 1);
    } else {
      dealer = this.dealer;
    }

    return {
      hand: this.hand,
      dealer,
      id: this.id,
      state: this.stateMachine.state
    }
  }
}

export async function proceed(req, res) {
  const gameId = req.params.game;
  const { username } = decrypt(req.cookies.auth);
  // lookup existing game
  const game = await req.app.db.get(`blackjack:${gameId}:${username}`);
  if(!game) {
    return res.sendStatus(404);
  }

  const { data, transition } = req.body;
  debug(`Performing a ${transition} on blackjack#${game.id}`);
  if(game.stateMachine.can(transition)) {
    game.stateMachine[transition](data);
  } else {
    return res.sendStatus(405);
  }
  
  return res.json(game.serialize());
}
