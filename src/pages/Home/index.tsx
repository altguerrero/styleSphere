import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  const { category } = useParams<{ category: string }>();
  const { data: currentProducts } = useGetProductsQuery();

  const { addToCart, products, closeShoppingCart } = useShoppingCartStore(
    (state: ShoppingCartState) => ({
      products: state.products,
      addToCart: state.addToCart,
      closeShoppingCart: state.closeShoppingCart,
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

  const {
    filteredProducts,
    titleSearch,
    categorySearch,
    filterByTitle,
    filterByCategory,
    filterByCategoryAndTitle,
    clearFilter,
  } = useProductFilterStore((state: ProductFilterState) => ({
    filteredProducts: state.filteredProducts,
    titleSearch: state.titleSearch,
    categorySearch: state.categorySearch,
    filterByTitle: state.filterByTitle,
    filterByCategory: state.filterByCategory,
    filterByCategoryAndTitle: state.filterByCategoryAndTitle,
    clearFilter: state.clearFilter,
  }));

  useEffect(() => {
    clearFilter();

    if (category) {
      filterByCategory(currentProducts ?? [], category);
    }
  }, [category, clearFilter, currentProducts, filterByCategory]);

  return (
    <div className="flex flex-col items-center gap-4">
      <header className="relative flex w-80 flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-medium">Exclusive Products</h1>
        <SearchBar
          value={titleSearch}
          onHandleSearch={value => {
            if (category) {
              filterByCategoryAndTitle(currentProducts ?? [], category, value);
            } else {
              filterByTitle(currentProducts ?? [], value);
            }
          }}
        />
      </header>
      <main>
        {(!filteredProducts.length && titleSearch) ||
        (!filteredProducts.length && categorySearch) ? (
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
                  onHandleOpen={product => {
                    openProductDetail(product);
                    closeShoppingCart();
                  }}
                  onHandleAddToCart={(event, product) => {
                    event.stopPropagation();
                    addToCart(product);
                    closeProductDetail();
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
