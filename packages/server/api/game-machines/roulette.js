const reds = new Set(
  [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
);

const categories = {};
for(let i = 1; i <= 36; i ++) {
  categories[i] = new Set();
  categories[i].add(i);
  if(reds.has(i)) {
    categories[i].add('RED');
  } else {
    categories[i].add('BLACK');
  }

  if(i % 2 == 0) {
    categories[i].add('EVEN');
  } else {
    categories[i].add('ODDS');
  }
  
  if(i <= 18) {
    categories[i].add('1 to 18');
  } else {
    categories[i].add('19 to 36');
  }

  if(i <= 12) {
    categories[i].add('1 to 12');
  } else if (i <= 24) {
    categories[i].add('13 to 24');
  } else {
    categories[i].add('25 to 36');
  }

  if (i % 3 == 0) {
    categories[i].add('Col3');
  } else if(i % 3 == 1) {
    categories[i].add('Col2');
  } else {
      categories[i].add('Col1');
  }
}

// the 0s are not considered in the same way
categories['0'] = new Set();
categories['0'].add('0');
categories['00'] = new Set();
categories['00'].add('00');

const payouts = {
  'RED': 1,
  'BLACK': 1,
  'ODD': 1,
  'EVEN': 1,
  '1 to 18': 1,
  '19 to 36': 1,
  '13 to 24': 2,
  '25 to 36': 2,
  'Col1': 2,
  'Col2': 2,
  'Col3': 2,
};

// spins a roulette wheel and reports on the outcome
class Wager {
  constructor(places) {
    this.places = places;
  }

  payout(result) {
    // given where the player placed the chips, calculate how much
    // they earn for a given payout. If they don't earn anything,
    // they are issued a negative value indicating the amount that they
    // lost
    console.log(this.places);
    const winningPlaces = categories[result];
    console.log(winningPlaces);

    let winnings = 0;
    Object.entries(this.places).forEach(([place, wager]) => {
      if(winningPlaces.has(place)) {
        winnings += wager * payouts[place] * 10;
      } else {
        winnings -= wager * payouts[place] * 10;
      }
    });

    return winnings;
  }
}

export function spinWheel(bet) {
  // generate 0 to 39, 39 is 00
  const result = Math.round(Math.random() * 39);
  const wager = new Wager(bet);
  return { result, winnings: wager.payout(result) }
}
