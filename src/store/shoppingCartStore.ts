import { create } from 'zustand';

import { IProduct } from '@/interfaces';

export type ShoppingCartState = {
  products: IProduct[];
  isHoppingCartOpen: boolean;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
  closeShoppingCart: () => void;
};

export const useShoppingCartStore = create<ShoppingCartState>(set => ({
  products: [],
  isHoppingCartOpen: false,
  addToCart: (product: IProduct) =>
    set(state => ({
      products: [...state.products, product],
      isHoppingCartOpen: true,
    })),
  removeFromCart: (product: IProduct) =>
    set(state => ({
      products: state.products.filter(
        currentProduct => currentProduct.id !== product.id
      ),
    })),
  clearCart: () => set(() => ({ products: [] })),
  closeShoppingCart: () =>
    set(() => ({
      isHoppingCartOpen: false,
    })),
}));
