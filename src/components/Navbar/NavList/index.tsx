import React from 'react';

import { IMenu } from '@/interfaces';

interface NavListProps {
  items: IMenu[];
  render?: (item: any) => React.ReactNode;
  children?: (item: any) => React.ReactNode;
}

export const NavList: React.FC<NavListProps> = ({ children, render, items }) => {
  const renderChildren = children || render;

  return (
    <ul className="flex items-center gap-3">
      {Boolean(items.length) &&
        items.map((item, index) => <li key={index}>{renderChildren && renderChildren(item)}</li>)}
    </ul>
  );
};
