import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Layout } from '@/components';
import { AppRoutes } from '@/routes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};
