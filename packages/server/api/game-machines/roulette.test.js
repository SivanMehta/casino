import assert from 'assert';
import { spinWheel, Wager } from './roulette.js';

describe('outside bets', () => {
  it('RED / BLACK', () => {
    const wager = new Wager({ RED: 1 });

    assert.equal(wager.payout(1), 1);
    assert.equal(wager.payout(2), -1);
  });

  it('ODD / EVEN', () => {
    const wager = new Wager({
      ODD: 1
    });

    assert.equal(wager.payout(1), 1);
    assert.equal(wager.payout(2), -1);
    assert.equal(wager.payout(0), -1);
    assert.equal(wager.payout('00'), -1);
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

  it('split bet', () => {
    const wager = new Wager({
      13: 1,
      10: 2
    });

    assert.equal(wager.payout(20), -3);
    assert.equal(wager.payout(13), 17 - 2);
    assert.equal(wager.payout(10), 35 - 2);
  });

  it('street bet', () => {
    const wager = new Wager({
      1: 1,
      2: 2,
      3: 3
    });

    assert.equal(wager.payout(20), -6);
    assert.equal(wager.payout(2), 22 - 3 - 1);
    assert.equal(wager.payout(3), 33 - 2 - 1);
  });

  it('corner bet', () => {
    const wager = new Wager({
      1: 1,
      2: 2,
      3: 3,
      4: 4
    });

    assert.equal(wager.payout(20), - 10);
    assert.equal(wager.payout(2), 16 - 4 - 3 - 1);
    assert.equal(wager.payout(3), 24 - 4 - 2 - 1);
  });

  it('five-number bet', () => {
    const wager = new Wager({
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5
    });

    assert.equal(wager.payout(20), -15);
    assert.equal(wager.payout(2), 12 - 5 - 4 - 3 - 1);
    assert.equal(wager.payout(3), 18 - 5 - 4 - 2 - 1);
  });

  it('six line bet', () => {
    const wager = new Wager({
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6
    });

    assert.equal(wager.payout(20), -21);
    assert.equal(wager.payout(2), 10 - 6 - 5 - 4 - 3 - 1);
    assert.equal(wager.payout(3), 15 - 6 - 5 - 4 - 2 - 1);
  });
});

describe('weird bets', () => {
  it('zeroes', () => {
    let wager = new Wager({
      0: 1
    });
    assert.equal(wager.payout(0), 35);
    assert.equal(wager.payout(1), -1);

    wager = new Wager({
      '00': 1
    });
    assert.equal(wager.payout('00'), 35);
    assert.equal(wager.payout(1), -1);
    
    wager = new Wager({
      '19 to 36': 1
    });
    assert.equal(wager.payout('0'), -1);
    assert.equal(wager.payout('00'), -1);
  });

  it('mixed inside / outside', () => {
    let wager = new Wager({
      RED: 10,
      Col2: 10
    });

    assert.equal(wager.payout(20), 20 - 10);
    assert.equal(wager.payout(23), 20 + 10);
    assert.equal(wager.payout(22), -20);
  })
});
