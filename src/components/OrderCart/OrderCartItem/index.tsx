import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { IProduct } from '@/interfaces';

interface OrderCartItemProps {
  product: IProduct;
  onHandleRemove?: (prduct: IProduct) => void;
}

export const OrderCartItem: React.FC<OrderCartItemProps> = ({
  product,
  onHandleRemove,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <figure className="h-20 w-20">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={product?.images[0]}
            alt={product?.description}
          />
        </figure>
        <p className="text-sm font-light">{product?.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${product?.price}</p>
        {onHandleRemove && (
          <div
            className="h-6 w-6 cursor-pointer rounded-full text-black transition-colors duration-75 hover:bg-red-500 hover:text-white"
            onClick={() => onHandleRemove(product)}
          >
            <XMarkIcon className="h-6 w-6 " />
          </div>
        )}
      </div>
    </div>
  );
};
