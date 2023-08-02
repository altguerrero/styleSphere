import { create } from 'zustand';

import { IProduct } from '@/interfaces';

export interface ProductFilterState {
  filteredProducts: IProduct[];
  titleSearch: string;
  categorySearch: string;
  filterByTitle: (products: IProduct[], title: string) => void;
  filterByCategory: (products: IProduct[], category: string) => void;
  filterByCategoryAndTitle: (
    products: IProduct[],
    category: string,
    title: string
  ) => void;
  clearFilter: () => void;
}
export const useProductFilterStore = create<ProductFilterState>(set => ({
  filteredProducts: [],
  titleSearch: '',
  categorySearch: '',
  filterByTitle: (products: IProduct[], title: string) => {
    const lowerCaseTitle = title?.toLowerCase().trim();
    set(state => ({
      ...state,
      filteredProducts: lowerCaseTitle
        ? products.filter(
            product => product.title?.toLowerCase().includes(lowerCaseTitle)
          )
        : products,
      titleSearch: title,
    }));
  },
  filterByCategory: (products: IProduct[], category: string) => {
    const lowerCaseCategory = category?.toLowerCase().trim();
    set(state => ({
      ...state,
      filteredProducts: lowerCaseCategory
        ? products.filter(
            product =>
              product.category?.name.toLowerCase() === lowerCaseCategory
          )
        : products,
      categorySearch: category,
    }));
  },
  filterByCategoryAndTitle: (
    products: IProduct[],
    category: string,
    title: string
  ) => {
    const lowerCaseCategory = category?.toLowerCase().trim();
    const lowerCaseTitle = title?.toLowerCase().trim();

    set(state => ({
      ...state,
      filteredProducts: products.filter(
        product =>
          (lowerCaseCategory
            ? product.category?.name.toLowerCase() === lowerCaseCategory
            : true) &&
          (lowerCaseTitle
            ? product.title?.toLowerCase().includes(lowerCaseTitle)
            : true)
      ),
      titleSearch: title,
    }));
  },
  clearFilter: () => {
    set({ filteredProducts: [], titleSearch: '', categorySearch: '' });
  },
}));
