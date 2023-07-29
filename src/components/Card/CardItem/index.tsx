import React from 'react';

import { IProduct } from '@/interfaces';

interface CardProps {
  product: IProduct;
}

export const Card: React.FC<CardProps> = ({ product: { image, name, price, tag } }) => {
  return (
    <article className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          +
        </div>
        <img src={image} alt="tagTitle" className="w-full h-full object-cover rounded-lg" />
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {tag}
        </span>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{name}</span>
        <span className="text-lg font-medium">{price}</span>
      </p>
    </article>
  );
};
