import React from 'react';

import { Card, CardList, ProductDetail } from '@/components';
import { useGetProductsQuery } from '@/hooks';
import {
  ProductDetailState,
  ShoppingCartState,
  useProductDetailStore,
  useShoppingCartStore,
} from '@/store';

export const Home: React.FC = () => {
  const { data } = useGetProductsQuery();
  const addToCart = useShoppingCartStore(
    (state: ShoppingCartState) => state.addToCart
  );
  const { displayedProduct, isOpen, openProductDetail, closeProductDetail } =
    useProductDetailStore((state: ProductDetailState) => ({
      displayedProduct: state.displayedProduct,
      isOpen: state.isProductDetailOpen,
      openProductDetail: state.openProductDetail,
      closeProductDetail: state.closeProductDetail,
    }));

  return (
    <div className="flex flex-col items-center">
      <CardList items={data || []}>
        {item => (
          <Card
            product={item}
            onHandleOpen={openProductDetail}
            onHandleAddToCart={addToCart}
          />
        )}
      </CardList>
      <ProductDetail
        product={displayedProduct}
        isOpen={isOpen}
        onHandleClose={closeProductDetail}
      />
    </div>
  );
};
