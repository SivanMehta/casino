import { redirect } from 'react-router-dom';

export default function gameLoader(game) {
  return async function({ params }) {
    if(params.game == 'new') {
      const res = await fetch(`/api/${game}/new`, {
        method: 'POST'
      });
      
      const { gameId } = await res.json();

      return redirect(`/${game}/${gameId}`)
    } else {
      return null
    }
  }
}
