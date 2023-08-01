import { create } from 'zustand';

import { IOrder } from '@/interfaces';

export type OrderState = {
  orderToAdd: any;
  orders: IOrder[];
};

export const useOrderStore = create<OrderState>(set => ({
  orders: [],
  orderToAdd: (order: IOrder) =>
    set(state => ({
      orders: [...state.orders, order],
    })),
}));
