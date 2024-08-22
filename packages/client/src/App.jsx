import React from 'react';
import Context from './constants.jsx';
import Landing from './pages/Landing.jsx';
import Game from './pages/Game.jsx';
import Error from './pages/Error.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/game/:gameId",
    element: <Game />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </React.StrictMode>
  )
}


export default App;
