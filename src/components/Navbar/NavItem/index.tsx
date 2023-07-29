import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  activeStyle: string;
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ children, to, activeStyle }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? activeStyle : undefined)}>
      {children}
    </NavLink>
  );
};
