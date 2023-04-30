import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faFilter,
  faTags,
  faFile,
  faFileAlt,
  faCaretLeft,
  faCrown,
  faDollarSign,
  faBolt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';

const ProductPageSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border-r w-60 h-full fixed left-0 z-10 transition duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
    <div>
      <div className='px-4 py-2 flex justify-between'>
      <div className='flex-shrink-0'>
      <h1 className="mt-7 text-xl font-semibold">
        <FontAwesomeIcon icon={faFilter} className="mr-2" />
        Filters
      </h1>
      </div>
      <div className="flex-shrink-0">
        <button
          className="mt-7 text-gray-700 hover:text-gray-700 focus:outline-none"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            icon={isOpen ? faCaretLeft : faChevronLeft}
            className="text-lg text-gray-600"
          />
        </button>
      </div>
      </div>
      <div className='p-2'>
        <div className="m-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
          Badge
          <span class="ml-2 text-red-500">
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </div>
        <div className="m-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
          Badge
          <span class="ml-2 text-red-500">
            <FontAwesomeIcon icon={faTimes}/>
          </span>
        </div>
      </div>
    </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold">
          <FontAwesomeIcon icon={faTags} className="mr-2" />
          Category
        </h2>
        <div className="grid grid-cols-2 p-3">
            <button className="flex flex-col items-center justify-center w-full h-8  text-gray-500 hover:text-gray-700 focus:outline-none border rounded-md">
              Category 1
            </button>
            <button className="flex flex-col justify-center w-full h-8  text-gray-500 hover:text-gray-700 focus:outline-none border rounded-md">
              Category 2
            </button>
            <button className="flex flex-col justify-center w-full h-8  text-gray-500 hover:text-gray-700 focus:outline-none border rounded-md">
              Category 3
            </button>
        </div>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold">
          <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
          License
        </h2>
        <ul className="mt-2 grid grid-cols-2">
          <li className="my-1">
            <button className="justify-center w-full h-8 text-gray-500 hover:text-gray-700 focus:outline-none border rounded-md mb-2">
              <FontAwesomeIcon icon={faBolt} /> Free
            </button>
          </li>
          <li className="my-1">
            <button className="justify-center w-full h-8 text-gray-500 hover:text-gray-700 focus:outline-none border rounded-md mb-2">
              Fee-based
            </button>
          </li>
        </ul>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold">
          <FontAwesomeIcon icon={faFile} className="mr-2" />
          File Type
        </h2>
        <ul className="mt-2">
          <li className="my-1">
            <span className="text-gray-500 hover:text-gray-700">
              File Type 1
            </span>
          </li>
          <li className="my-1">
            <span className="text-gray-500 hover:text-gray-700 ">
              File Type 2
            </span>
            </li>
          <li className="my-1">
            <span className="text-gray-500 hover:text-gray-700">
              File Type 3
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductPageSidebar;

