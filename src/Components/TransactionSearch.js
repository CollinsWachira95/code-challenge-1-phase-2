import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input type="text" placeholder="Search transactions" onChange={handleSearchChange} />
  );
}

export default SearchBar;
