import React from 'react';

import { OrderSummaryItem, OrderSummaryList } from '@/components';
import { OrderState, useOrderStore } from '@/store';

export const MyOrders: React.FC = () => {
  const { orders } = useOrderStore((state: OrderState) => ({
    orders: state.orders,
  }));

  return (
    <div className="mx-auto flex w-96 flex-col gap-4">
      <header className="flex items-center justify-center gap-8 px-6 text-lg">
        <h1 className="text-xl font-medium">My Orders</h1>
      </header>
      <main>
        <OrderSummaryList orders={orders}>
          {order => <OrderSummaryItem order={order} />}
        </OrderSummaryList>
      </main>
    </div>
  );
};
