import React from 'react';

interface SearchBarProps {
  value: string;
  onHandleSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onHandleSearch,
}) => {
  return (
    <input
      type="text"
      placeholder="Search a product"
      className="w-full rounded-lg border border-black p-4 focus:outline-none"
      value={value}
      onChange={event => onHandleSearch(event.target.value)}
    />
  );
};
