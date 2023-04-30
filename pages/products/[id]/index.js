import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'

const ProductDetailPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 rounded p-5 shadow-md w-fit">
        <div className="flex flex-col items-center">
          <Image
            src="https://res.cloudinary.com/murste/image/upload/v1619359682/ecom_xrzgmm.jpg"
            alt="Product Image"
            className="max-w-full h-auto"
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>
          <p className="text-gray-500 text-sm mb-4">
            Short Description of the Product
          </p>
          <div className="flex mb-4">
          </div>
          <div className='flex'>
              <button className="text-blue-500 text-lg py-2 px-4 rounded-md hover:text-blue-700 border">
              <FontAwesomeIcon icon={faShoppingCart} className="text-lg"/> Add to Cart
              </button>
              <button className="text-green-500 text-lg py-2 px-4 ml-4 rounded-md hover:text-green-700 border">
              <FontAwesomeIcon icon={faCreditCard} className="text-lg" /> Buy Now
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
