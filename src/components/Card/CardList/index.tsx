import React from 'react';

interface CardListProps {
  items: any[];
  render?: (item: any) => React.ReactNode;
  children?: (item: any) => React.ReactNode;
}

export const CardList: React.FC<CardListProps> = ({ children, render, items }) => {
  const renderChildren = children || render;
  return (
    <section>
      <ul className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {Boolean(items.length) &&
          items.map((item, index) => <li key={index}>{renderChildren && renderChildren(item)}</li>)}
      </ul>
    </section>
  );
};
