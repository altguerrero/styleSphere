import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { IProduct } from '@/interfaces';

interface ProductDetailProps {
  product: IProduct;
  isOpen: boolean;
  onHandleClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  isOpen,
  onHandleClose,
}) => {
  return (
    <aside
      className={`${
        isOpen ? 'flex' : 'hidden'
      } fixed right-0 w-[360px] flex-col gap-y-6 rounded-lg border border-black bg-white  p-6`}
      style={{ height: 'calc(100vh - 68px)' }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-medium">Detail</h2>
        <div className="cursor-pointer" onClick={onHandleClose}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      <figure>
        <img
          className="h-full w-full rounded-lg"
          src={product?.images[0]}
          alt={product?.description}
        />
      </figure>
      <p className="flex flex-col">
        <span className="mb-2 text-2xl font-medium">${product?.price}</span>
        <span className="text-md font-medium">{product?.title}</span>
        <span className="text-sm font-medium">{product?.description}</span>
      </p>
    </aside>
  );
};
