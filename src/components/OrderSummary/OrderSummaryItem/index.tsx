import { CalendarDaysIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

import { IOrder } from '@/interfaces';

interface OrderSummaryItemProps {
  order: IOrder;
}

export const OrderSummaryItem: React.FC<OrderSummaryItemProps> = ({
  order,
}) => {
  const id = new Date(order?.date).getTime();

  return (
    <Link to={`/my-orders/${id}`}>
      <div className="border- flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-black bg-white p-4 transition-colors duration-75 hover:bg-gray-100">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 text-sm font-light">
            <span>
              <CalendarDaysIcon className="h-6 w-6 text-black" />
            </span>
            <span>{new Date(order?.date).toLocaleDateString('en-US')}</span>
          </p>
          <p className="flex items-center gap-2 text-sm font-light">
            <span>
              <ShoppingBagIcon className="h-6 w-6 text-black" />
            </span>
            <span>{order?.totalProducts}</span>
          </p>
        </div>
        <p className="text-lg font-medium">{order.totalPrice}</p>
      </div>
    </Link>
  );
};
