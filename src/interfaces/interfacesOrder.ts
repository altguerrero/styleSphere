import { IProduct } from '.';

export interface IOrder {
  date: string;
  products: IProduct[];
  totalProducts: number;
  totalPrice: string;
}
