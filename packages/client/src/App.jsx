import React from 'react';
import Landing from './pages/Landing.jsx';
import { Logout } from './pages/Login.jsx';
import Roulette from './pages/roulette/index.jsx';
import Error from './pages/Error.jsx';
import { UserProvider } from './hooks/useUser.jsx';

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
  const { user } = useUser();
  if(!user) {
    return <Login />
  };

  return (
    <>
      { children }
      <pre>
        { JSON.stringify(JSON.parse(atob(user)), null, 2) }
      </pre>
      <a href="/">Home</a> | <Logout />
    </>
  )
}

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
