import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBrand: React.FC = () => {
  return (
    <div className="text-lg font-semibold">
      <NavLink to="/">StyleSphere</NavLink>
    </div>
  );
};
