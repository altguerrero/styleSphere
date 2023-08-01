import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { IProduct } from '@/interfaces';

interface CardProps {
  productsInCart: IProduct[];
  product: IProduct;
  onHandleOpen: (product: IProduct) => void;
  onHandleAddToCart: (
    event: React.MouseEvent<HTMLDivElement>,
    product: IProduct
  ) => void;
}

export const Card: React.FC<CardProps> = ({
  productsInCart,
  product,
  onHandleOpen,
  onHandleAddToCart,
}) => {
  const isInCart = productsInCart.includes(product);

  return (
    <article
      className="h-60 w-56 cursor-pointer rounded-lg bg-white"
      onClick={() => onHandleOpen(product)}
    >
      <figure className="relative mb-2 h-4/5 w-full">
        <div
          className={`absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full shadow ${
            isInCart ? 'bg-green-500 text-white ' : 'bg-white text-black'
          } p-1 transition-all duration-75`}
          onClick={event => onHandleAddToCart(event, product)}
        >
          {isInCart ? (
            <CheckIcon className="h-6 w-6" />
          ) : (
            <PlusIcon className="h-6 w-6" />
          )}
        </div>
        <img
          src={product?.images[0]}
          alt={product?.description}
          className="h-full w-full rounded-lg object-cover"
        />
        <span className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
          {product?.category?.name}
        </span>
      </figure>
      <p className="flex items-center justify-between">
        <span className="text-sm font-light">{product?.title}</span>
        <span className="text-lg font-medium">${product?.price}</span>
      </p>
    </article>
  );
};
