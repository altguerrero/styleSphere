import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { OrderCartItem, OrderCartList } from '@/components';
import { OrderState, useOrderStore } from '@/store';

export const MyOrder: React.FC = () => {
  const { orders } = useOrderStore((state: OrderState) => ({
    orders: state.orders,
  }));
  const { id } = useParams<{ id: string }>();

  const filteredOrder = orders.find(
    order => String(new Date(order.date).getTime()) === id
  );
  const products =
    (filteredOrder?.products || orders[orders.length - 1]?.products) ?? [];

  return (
    <div className="mx-auto flex w-96 flex-col gap-4">
      <header className="relative flex items-center justify-center gap-8 px-6 text-lg">
        <div className="absolute left-6 cursor-pointer">
          <Link to="/my-orders">
            <ChevronLeftIcon className="h-6 w-6 text-black" />
          </Link>
        </div>
        <h1 className="text-xl font-medium">My Order</h1>
      </header>
      <main>
        <OrderCartList products={products}>
          {product => <OrderCartItem key={product.id} product={product} />}
        </OrderCartList>
      </main>
    </div>
  );
};
