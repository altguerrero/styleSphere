import React from 'react';

import { IOrder } from '@/interfaces';

interface OrderSummaryListProps {
  children?: (order: IOrder) => React.ReactNode;
  render?: (order: IOrder) => React.ReactNode;
  orders: IOrder[];
}

export const OrderSummaryList: React.FC<OrderSummaryListProps> = ({
  children,
  render,
  orders,
}) => {
  const renderChildren = children || render;

  return (
    <ul className="flex flex-col gap-4">
      {Boolean(orders.length) &&
        orders.map((order, index) => (
          <li key={index}>{renderChildren && renderChildren(order)}</li>
        ))}
    </ul>
  );
};
