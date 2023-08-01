import { create } from 'zustand';

import { ICategory, IProduct } from '@/interfaces';

export interface ProductFilterState {
  filteredProducts: IProduct[];
  prompt: string | number;
  filterByTitle: (products: IProduct[], title: string) => void;
  filterByCategory: (products: IProduct[], category: ICategory) => void;
}

export const useProductFilterStore = create<ProductFilterState>(set => ({
  filteredProducts: [],
  prompt: '',
  filterByTitle: (products: IProduct[], title: string) => {
    set({ prompt: title });

    const loweCaseTitle = title?.toLowerCase().trim();
    if (!loweCaseTitle) {
      set({ filteredProducts: [] });
      return;
    }

    const filteredProducts = products.filter(
      product => product.title?.toLowerCase().includes(loweCaseTitle)
    );

    set({ filteredProducts });
  },
  filterByCategory: (products: IProduct[], category: ICategory) => {
    set({ prompt: category?.id });

    if (!category?.id) {
      set({ filteredProducts: [] });
      return;
    }

    const filteredProducts = products.filter(
      product => product.category?.id === category?.id
    );

    set({ filteredProducts });
  },
}));
