import { redirect } from 'react-router-dom';

export default function gameLoader(game) {
  return async function({ params }) {
    if(params.id == 'new') {
      const res = await fetch(`/api/${game}/new`);
      
      const { id } = await res.json();
      return redirect(`/${game}/${id}`);
    } else if (params.id) {
      const res = await fetch(`/api/${game}/${params.id}`);

      if(res.ok) {
        const { state } = await res.json();
        return state;
      } else {
        const status = await res.status;
        console.log(params.id + ' is not a valid game')
        return redirect('/' + game);
      }
    }

    return {};
  }
}
