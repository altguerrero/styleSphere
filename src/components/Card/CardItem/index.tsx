import React from 'react';

import { IProduct } from '@/interfaces';

interface CardProps {
  product: IProduct;
  onHandleAddToCart: (product: IProduct) => void;
}

export const Card: React.FC<CardProps> = ({ product, onHandleAddToCart }) => {
  return (
    <article className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white hover:bg-white/60 transition-all duration-75 w-6 h-6 rounded-full m-2 p-1"
          onClick={() => onHandleAddToCart(product)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
        <img
          src={product?.images[0]}
          alt={product?.description}
          className="w-full h-full object-cover rounded-lg"
        />
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {product?.category?.name}
        </span>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{product?.title}</span>
        <span className="text-lg font-medium">${product?.price}</span>
      </p>
    </article>
  );
};
