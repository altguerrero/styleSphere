import { IProduct } from '@/interfaces';

/**
 * Calculate the total price of a list of products and return the result
 * in currency format.
 *
 * @param {IProduct[]} products - The list of products to sum.
 * @param {string} [currency='USD'] - The currency in which the result will be displayed. Default is 'USD'.
 * @returns {string} - The total in currency format.
 */
export const totalPrice = (
  products: IProduct[],
  currency: string = 'USD'
): string => {
  const total = products.reduce(
    (total: number, element: IProduct) => total + Number(element.price),
    0
  );

  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: currency,
  });

  return formatter.format(total);
};
