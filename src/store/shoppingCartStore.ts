import create from 'zustand';

import { IProduct } from '@/interfaces';

export type ShoppingCartState = {
  products: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
};

export const useShoppingCartStore = create<ShoppingCartState>(set => ({
  products: [],
  addToCart: (product: IProduct) =>
    set(state => ({
      products: [...state.products, product],
    })),
  removeFromCart: (product: IProduct) =>
    set(state => ({
      products: state.products.filter(
        currentProduct => currentProduct.id !== product.id
      ),
    })),
  clearCart: () => set({}, true),
}));
