import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface ProductDetailCartWrapperProps {
  children: React.ReactNode;
  isOpen: boolean;
  onHandleClose: () => void;
  title: string;
}

export const ProductDetailCartWrapper: React.FC<
  ProductDetailCartWrapperProps
> = ({ children, isOpen, onHandleClose, title }) => {
  return (
    <aside
      className={`${
        isOpen ? 'flex' : 'hidden'
      } fixed bottom-0 right-0 w-[360px] flex-col gap-y-6 rounded-lg border border-black bg-white py-6`}
      style={{ height: 'calc(100vh - 68px)' }}
    >
      <div className="flex items-center justify-between px-6">
        <h2 className="text-xl font-medium">{title}</h2>
        <div className="cursor-pointer" onClick={onHandleClose}>
          <XMarkIcon className="h-6 w-6 text-black" />
        </div>
      </div>
      {children}
    </aside>
  );
};
