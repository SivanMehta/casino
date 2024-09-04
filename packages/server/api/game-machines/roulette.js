const reds = new Set(
  [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
);

const outsideBets = {
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

const outsideBetHandler = {
  get(target, prop, receiver) {
    if(!(prop in outsideBets)) {
      return 0;
    }

    return Reflect.get(...arguments);
  }
}

const outsideBetPayouts = new Proxy(outsideBets, outsideBetHandler);

const categories = {};
for(let i = 1; i <= 36; i ++) {
  categories[i] = new Set();
  categories[i].add(`${i}`);
  if(reds.has(i)) {
    categories[i].add('RED');
  } else {
    categories[i].add('BLACK');
  }

  if(i % 2 == 0) {
    categories[i].add('EVEN');
  } else {
    categories[i].add('ODD');
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
    categories[i].add('Col1');
  } else {
    categories[i].add('Col2');
  }
}

// the 0s are not considered in the same way
categories['0'] = new Set();
categories['0'].add('0');
categories['00'] = new Set();
categories['00'].add('00');

const insideBetPayouts = {
  0: 0,
  1: 35,
  2: 17,
  3: 11,
  4: 8,
  5: 6,
  6: 5,
};

// Given a bet, return the payout of a potential inside bet
// If the bet does not contain an inside bet, return 0
export function determineInsideBet(bet) {
  const places = Object.keys(bet);

  for (let i = 0; i < places.length; i ++) {
    if(places[i] in outsideBetPayouts) {
      delete places[i];
    }
  }

  const size = places.filter(Boolean).length;
  if(size > 6) return 0;
  return insideBetPayouts[size];
}

// spins a roulette wheel and reports on the outcome
export class Wager {
  constructor(places) {
    this.places = places;
  }

  payout(result) {
    // given where the player placed the chips, calculate how much
    // they earn for a given payout. If they don't earn anything,
    // they are issued a negative value indicating the amount that they
    // lost
    const winningPlaces = categories[result];

    let winnings = 0;
    Object.entries(this.places).forEach(([place, wager]) => {
      if(winningPlaces.has(place)) {
        winnings += wager * (outsideBetPayouts[place] + determineInsideBet(this.places));
      } else {
        winnings -= wager;
      }
    });

    return winnings;
  }
}

export function spinWheel(bet) {
  // 37 is 00
  let result = Math.round(Math.random() * 37);
  if(result == 37) {
    result = '00';
  }
  const wager = new Wager(bet);
  return { result, winnings: wager.payout(result) * 10 }
}
