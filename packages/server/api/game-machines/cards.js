export const API = 'https://www.deckofcardsapi.com/api/';

export async function drawFromDeck(id, count) {
  const res = await fetch(
    `${API}/deck/${id}/draw/?count=${count}`
  );
  const { cards } = await res.json();
  const values = cards.map(card => card.code);
  return values;
}
