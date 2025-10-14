import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import App from '../App';
import Services from '@/pages/Services/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/services',
        element: <Services />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
