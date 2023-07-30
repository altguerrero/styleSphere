import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';

import {
  ShoppingCartState,
  useShoppingCartStore,
} from '@/store/shoppingCartStore';

export const NavCart: React.FC = () => {
  const products = useShoppingCartStore(
    (state: ShoppingCartState) => state.products
  );

  return (
    <div className="flex cursor-pointer items-center">
      <ShoppingBagIcon className="h-6 w-6 text-black" />
      <div>{products.length}</div>
    </div>
  );
};
