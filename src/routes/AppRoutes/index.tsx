import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Home, MyAccount, MyOrders, NotFound, SignIn } from '@/pages';

export const AppRoutes: React.FC = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/signin', element: <SignIn /> },
    { path: '*', element: <NotFound /> },
  ]);

  return routes;
};
