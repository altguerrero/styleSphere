import React from 'react';

import { Card, CardList } from '@/components';
import { useGetProductsQuery } from '@/hooks';
import { ShoppingCartState, useShoppingCartStore } from '@/store/shoppingCartStore';

export const Home: React.FC = () => {
  const { data } = useGetProductsQuery();
  const addToCart = useShoppingCartStore((state: ShoppingCartState) => state.addToCart);

  return (
    <div className="flex flex-col items-center">
      <CardList items={data ?? []}>
        {(item) => <Card product={item} onHandleAddToCart={(product) => addToCart(product)} />}
      </CardList>
    </div>
  );
};
