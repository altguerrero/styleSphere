import { IMenu } from '@/interfaces';

export const mainMenuItems: IMenu[] = [
  {
    to: '/',
    name: 'All',
  },
  {
    to: '/clothes',
    name: 'Clothes',
  },
  {
    to: '/electronics',
    name: 'Electronics',
  },
  {
    to: '/furnitures',
    name: 'Furnitures',
  },
  {
    to: '/toys',
    name: 'Toys',
  },
  {
    to: 'Others',
    name: 'Others',
  },
];

export const userMenuItems: IMenu[] = [
  {
    to: '/my-orders',
    name: 'My Orders',
  },
  {
    to: '/my-account',
    name: 'My Account',
  },
  {
    to: '/signin',
    name: 'Sign In',
  },
];
