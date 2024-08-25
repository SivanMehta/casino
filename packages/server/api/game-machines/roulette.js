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

    const loss = Object
    .values(this.places)
    .reduce((acc, cur) => acc + cur, 0) * -10;

    return Math.random() > 0.5 ? 100 : loss;
  }
}

export function spinWheel(bet) {
  // generate 0 to 39, 39 is 00
  const result = Math.round(Math.random() * 39);
  const wager = new Wager(bet);
  return wager.payout(result);
}
