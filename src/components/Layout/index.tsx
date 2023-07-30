import React from 'react';

import { Navbar } from '..';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-20 flex flex-col px-4">
        {children}
      </main>
    </>
  );
};
