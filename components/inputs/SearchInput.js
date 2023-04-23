import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
    return (
      <div className="relative w-full">
        <input
          type="text"
          className="w-full py-2 placeholder-center bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search Asset"
        />
        <button type="submit" className="absolute inset-y-0 right-0 px-4 py-2 rounded-full">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  };

export default SearchInput;
