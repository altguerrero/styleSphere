import create from 'zustand';

import { IProduct } from '@/interfaces';

export type ProductDetailState = {
  displayedProduct: IProduct;
  isProductDetailOpen: boolean;
  openProductDetail: (product: IProduct) => void;
  closeProductDetail: () => void;
};

const initialDisplayedProduct: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: {
    id: 0,
    name: '',
    image: '',
  },
  images: [],
};

export const useProductDetailStore = create<ProductDetailState>(set => ({
  displayedProduct: initialDisplayedProduct,
  isProductDetailOpen: false,
  openProductDetail: (product: IProduct) =>
    set(() => ({
      displayedProduct: product,
      isProductDetailOpen: true,
    })),
  closeProductDetail: () =>
    set(() => ({
      displayedProduct: initialDisplayedProduct,
      isProductDetailOpen: false,
    })),
}));
