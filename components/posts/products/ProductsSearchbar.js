import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="relative flex items-center">
      <input
        className="w-full py-2 px-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none"
        type="text"
        placeholder="Search for products..."
      />
      <button className="absolute top-0 right-0 mr-3 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full h-full w-12">
        <FontAwesomeIcon icon={faSearch} className="text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
