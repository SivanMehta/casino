import DEBUG from 'debug';
const debug = DEBUG('cards');
export const API = 'https://www.deckofcardsapi.com/api';

export async function drawFromDeck(id, count) {
  const url = `${API}/deck/${id}/draw/?count=${count}`;
  debug(`Drawing ${count} cards from deck#${id}`)
  const res = await fetch(url);
  if(res.ok) {
    const { cards } = await res.json();
    const values = cards.map(card => card.code);
    return values;
  } else {
    console.error(await res.text())
  }
}
