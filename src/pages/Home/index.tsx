import React from 'react';

import {
  Card,
  CardList,
  ProductDetail,
  ProductDetailCartWrapper,
  SearchBar,
} from '@/components';
import { useGetProductsQuery } from '@/hooks';
import {
  ProductDetailState,
  ProductFilterState,
  ShoppingCartState,
  useProductDetailStore,
  useProductFilterStore,
  useShoppingCartStore,
} from '@/store';

export const Home: React.FC = () => {
  const { data: currentProducts } = useGetProductsQuery();

  const { addToCart, products } = useShoppingCartStore(
    (state: ShoppingCartState) => ({
      addToCart: state.addToCart,
      products: state.products,
    })
  );

  const {
    displayedProduct,
    isProductDetailOpen,
    openProductDetail,
    closeProductDetail,
  } = useProductDetailStore((state: ProductDetailState) => ({
    displayedProduct: state.displayedProduct,
    isProductDetailOpen: state.isProductDetailOpen,
    openProductDetail: state.openProductDetail,
    closeProductDetail: state.closeProductDetail,
  }));

  const { filteredProducts, prompt, filterByTitle } = useProductFilterStore(
    (state: ProductFilterState) => ({
      filteredProducts: state.filteredProducts,
      prompt: state.prompt,
      filterByTitle: state.filterByTitle,
    })
  );

  return (
    <div className="flex flex-col items-center gap-4">
      <header className="relative flex w-80 flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-medium">Exclusive Products</h1>
        <SearchBar
          onHandleSearch={value => filterByTitle(currentProducts || [], value)}
        />
      </header>
      <main>
        {!filteredProducts.length && prompt ? (
          <p className="text-xl font-medium">No products found</p>
        ) : (
          <>
            <CardList
              items={
                filteredProducts.length
                  ? filteredProducts
                  : currentProducts ?? []
              }
            >
              {item => (
                <Card
                  productsInCart={products}
                  product={item}
                  onHandleOpen={openProductDetail}
                  onHandleAddToCart={(event, product) => {
                    event.stopPropagation();
                    addToCart(product);
                  }}
                />
              )}
            </CardList>
            <ProductDetailCartWrapper
              title="Detail"
              isOpen={isProductDetailOpen}
              onHandleClose={closeProductDetail}
            >
              <ProductDetail product={displayedProduct} />
            </ProductDetailCartWrapper>
          </>
        )}
      </main>
    </div>
  );
};
