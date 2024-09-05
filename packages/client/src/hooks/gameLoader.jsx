import { redirect } from 'react-router-dom';

export default function gameLoader(game) {
  return async function({ params }) {
    if(params.game == 'new') {
      const res = await fetch(`/api/${game}/new`, {
        method: 'POST'
      });
      
      const { gameId } = await res.json();
      return redirect(`/${game}/${gameId}`);

    } else if (params.game) {
      const res = await fetch(`/api/${game}/${params.game}`, {
        method: 'POST'
      });

      if(res.ok) {
        const { state } = await res.json();
        return { state };
      } else {
        console.error(await res.status())
      }
    }
  }
}
