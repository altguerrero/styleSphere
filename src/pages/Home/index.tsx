import React from 'react';

import { Card, CardList } from '@/components/Card';
import { IProduct } from '@/interfaces';

const productItems: IProduct[] = [
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Headphones',
    price: '$300',
    tag: 'Home',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Headphones',
    price: '$300',
    tag: 'Home',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Headphones',
    price: '$300',
    tag: 'Home',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Headphones',
    price: '$300',
    tag: 'Home',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Headphones',
    price: '$300',
    tag: 'Home',
  },
  {
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    name: 'Headphones',
    price: '$300',
    tag: 'Home',
  },
];

export const Home: React.FC = () => {
  return (
    <div className="flex justify-center">
      <CardList items={productItems}>{(item) => <Card product={item} />}</CardList>
    </div>
  );
};
