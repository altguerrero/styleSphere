import React from 'react';

interface SearchBarProps {
  onHandleSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onHandleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search a product"
      className="w-full rounded-lg border border-black p-4 focus:outline-none"
      onChange={event => onHandleSearch(event.target.value)}
    />
  );
};
