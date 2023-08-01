import React from 'react';
import { Link } from 'react-router-dom';

import { IOrder, IProduct } from '@/interfaces';
import { totalPrice } from '@/utils';

interface CartSummaryProps {
  products: IProduct[];
  onHandleCheckout: (products: IOrder) => void;
}

const handleCheckout = (products: IProduct[]) => {
  const order: IOrder = {
    date: new Date().toISOString(),
    products,
    totalPrice: totalPrice(products),
    totalProducts: products.length,
  };

  return order;
};

export const CartSummary: React.FC<CartSummaryProps> = ({
  products,
  onHandleCheckout,
}) => {
  const totalProductsPrice = totalPrice(products);

  return (
    <div className="flex flex-col gap-2 px-6">
      <p className="flex items-center justify-between">
        <span className="font-light">Total:</span>
        <span className="text-2xl font-medium">{totalProductsPrice}</span>
      </p>
      <Link to="/my-orders/last">
        <button
          type="button"
          className="w-full rounded-lg bg-black py-3 text-white"
          onClick={() => onHandleCheckout(handleCheckout(products))}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};
