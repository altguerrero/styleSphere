import React from 'react';

import { ShoppingCartState, useShoppingCartStore } from '@/store/shoppingCartStore';

export const NavCart: React.FC = () => {
  const products = useShoppingCartStore((state: ShoppingCartState) => state.products);

  return <button type="button">🛒 {products.length}</button>;
};
