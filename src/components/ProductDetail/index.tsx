import React from 'react';

import { IProduct } from '@/interfaces';

interface ProductDetailProps {
  product: IProduct;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <>
      <figure className="px-6">
        <img
          className="h-full w-full rounded-lg"
          src={product?.images[0]}
          alt={product?.description}
        />
      </figure>
      <p className="flex flex-col px-6">
        <span className="mb-2 text-2xl font-medium">${product?.price}</span>
        <span className="text-md font-medium">{product?.title}</span>
        <span className="text-sm font-medium">{product?.description}</span>
      </p>
    </>
  );
};
