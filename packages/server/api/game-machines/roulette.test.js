import assert from 'assert';
import { spinWheel, Wager } from './roulette.js';

describe('outside bets', () => {
  it('RED / BLACK', () => {
    const wager = new Wager({ RED: 10 });

    assert.equal(wager.payout(1), 10);
    assert.equal(wager.payout(2), -10);
  });

  it('ODD / EVEN', () => {
    const wager = new Wager({
      ODD: 10
    });

    assert.equal(wager.payout(1), 10);
    assert.equal(wager.payout(2), -10);
    assert.equal(wager.payout(0), -10);
    assert.equal(wager.payout('00'), -10);
  });

  it('high/low', () => {
    const wager = new Wager({ '1 to 18': 1 });

    assert.equal(wager.payout(1), 1);
    assert.equal(wager.payout(0), -1);
    assert.equal(wager.payout('00'), -1);
  });

  it('ranges', () => {
    const wager = new Wager({ 'Col2': 3 });

    assert.equal(wager.payout(1), -3);
    assert.equal(wager.payout(2), 6);
  });

  it('mixtures', () => {
    const wager = new Wager({
      'RED': 7,
      'BLACK': 5
    });

    assert.equal(wager.payout(1), 2);
    assert.equal(wager.payout(2), -2);
  })
});

describe('inside bets', () => {
  it('straight up bet', () => {
    const wager = new Wager({
      13: 1
    });

    assert.equal(wager.payout(20), -1);
    assert.equal(wager.payout(13), 35);
  });
  it('split bet')
  it('street bet')
  it('corner bet')
  it('six line bet')
  it('five-number bet')
});

describe('mixed inside/outside', () => {

});
