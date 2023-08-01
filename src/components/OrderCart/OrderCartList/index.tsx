import React from 'react';

import { IProduct } from '@/interfaces';

interface OrderCartListProps {
  products: IProduct[];
  children?: (product: IProduct) => React.ReactNode;
  render?: (product: IProduct) => React.ReactNode;
}

export const OrderCartList: React.FC<OrderCartListProps> = ({
  products,
  children,
  render,
}) => {
  const renderChildren = children || render;

  return (
    <ul className="flex flex-col gap-3 overflow-y-auto px-6">
      {Boolean(products.length) &&
        products.map((product: IProduct, index: number) => (
          <li key={index}>{renderChildren && renderChildren(product)}</li>
        ))}
    </ul>
  );
};
