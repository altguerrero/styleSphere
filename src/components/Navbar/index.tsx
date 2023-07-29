import React from 'react';

import { mainMenuItems, userMenuItems } from '@/constants';

import { NavBrand } from './NavBrand';
import { NavCart } from './NavCart';
import { NavItem } from './NavItem';
import { NavList } from './NavList';

export const Navbar: React.FC = () => {
  const activeStyle = 'underline underline-offset-4';

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
      <div className="flex items-center gap-3">
        <NavBrand />
        <NavList items={mainMenuItems}>
          {(item) => (
            <NavItem to={item.to} activeStyle={activeStyle}>
              {item.name}
            </NavItem>
          )}
        </NavList>
      </div>

      <div className="flex items-center gap-3">
        <NavList items={userMenuItems}>
          {(item) => (
            <NavItem to={item.to} activeStyle={activeStyle}>
              {item.name}
            </NavItem>
          )}
        </NavList>
        <NavCart />
      </div>
    </nav>
  );
};
