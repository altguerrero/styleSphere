import { IMenu } from '@/interfaces';

export const mainMenuItems: IMenu[] = [
  {
    to: '/',
    name: 'All',
  },
  {
    to: '/shoes',
    name: 'Shoes',
  },
  {
    to: '/electronics',
    name: 'Electronics',
  },
  {
    to: '/furniture',
    name: 'Furniture',
  },
  {
    to: '/clothes',
    name: 'Clothes',
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
