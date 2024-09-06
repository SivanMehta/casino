import React from 'react';
import Landing from './pages/Landing.jsx';
import { Logout } from './pages/Login.jsx';
import Roulette from './pages/roulette/index.jsx';
import Blackjack from './pages/blackjack/index.jsx';
import Error from './pages/Error.jsx';
import { UserProvider } from './hooks/useUser.jsx';
import GameLoader from './hooks/gameLoader.jsx';

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
    path: "/roulette/",
    element: <Roulette />,
    errorElement: <Error />,
  },
  {
    path: "/blackjack",
    element: <Blackjack />,
    loader: GameLoader('blackjack'),
    errorElement: <Error />,
    children: [
      {
        path: '/blackjack/:id',
        element: <Blackjack />,
      }
    ]
  }
]);

function App() {
  return (
    <React.StrictMode>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </React.StrictMode>
  )
}


export default App;
