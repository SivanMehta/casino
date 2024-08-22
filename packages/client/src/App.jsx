import React from 'react';
import Landing from './pages/Landing.jsx';
import Roulette from './pages/roulette/index.jsx';
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
    path: "/roulette/",
    element: <Roulette />,
    errorElement: <Error />,
  },
]);

function Context({ children }) {
  return (
    <>
      { children }
    </>
  )
}

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
