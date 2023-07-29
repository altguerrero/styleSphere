import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBrand: React.FC = () => {
  return (
    <div className="font-semibold text-lg">
      <NavLink to="/">StyleSphere</NavLink>
    </div>
  );
};
