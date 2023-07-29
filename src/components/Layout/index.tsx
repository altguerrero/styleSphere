import React from 'react';

import { Navbar } from '..';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mt-20 container mx-auto px-4">{children}</main>
    </>
  );
};
