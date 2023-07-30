import { useQuery } from '@tanstack/react-query';

import platziApi from '@/api/platziApi';
import { IProduct } from '@/interfaces';

const getProducts = async () => {
  const { data } = await platziApi.get<IProduct[]>('products');

  return data;
};

export const useGetProductsQuery = () => {
  return useQuery(['products'], getProducts);
};
