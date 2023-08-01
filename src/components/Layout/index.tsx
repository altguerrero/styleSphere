import React from 'react';

import {
  OrderState,
  ShoppingCartState,
  useOrderStore,
  useShoppingCartStore,
} from '@/store';

import {
  CartSummary,
  Navbar,
  OrderCartItem,
  OrderCartList,
  ProductDetailCartWrapper,
} from '..';
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    products,
    removeFromCart,
    isHoppingCartOpen,
    closeShoppingCart,
    clearCart,
  } = useShoppingCartStore((state: ShoppingCartState) => ({
    products: state.products,
    removeFromCart: state.removeFromCart,
    isHoppingCartOpen: state.isHoppingCartOpen,
    closeShoppingCart: state.closeShoppingCart,
    clearCart: state.clearCart,
  }));

  const { orderToAdd } = useOrderStore((state: OrderState) => ({
    orderToAdd: state.orderToAdd,
  }));

  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-20 flex flex-col px-4">
        {children}
        <ProductDetailCartWrapper
          title="Cart"
          isOpen={isHoppingCartOpen}
          onHandleClose={closeShoppingCart}
        >
          <OrderCartList products={products}>
            {product => (
              <OrderCartItem
                key={product.id}
                product={product}
                onHandleRemove={removeFromCart}
              />
            )}
          </OrderCartList>
          <CartSummary
            products={products}
            onHandleCheckout={products => {
              orderToAdd(products);
              closeShoppingCart();
              clearCart();
            }}
          />
        </ProductDetailCartWrapper>
      </main>
    </>
  );
};
