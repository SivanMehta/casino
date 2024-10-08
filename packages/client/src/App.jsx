import React from 'react';
import Landing from './pages/Landing.jsx';
import { Logout } from './pages/Login.jsx';
import Roulette from './pages/roulette/index.jsx';
import Blackjack from './pages/blackjack/index.jsx';
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
  },
  {
    path: "/roulette/",
    element: <Roulette />,
  },
  {
    path: "/blackjack/",
    element: <Blackjack />,
  },
  {
    path: "/blackjack/:id",
    element: <Blackjack />,
    loader: GameLoader('blackjack')
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
