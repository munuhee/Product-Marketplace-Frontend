import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const itemCount = 5
const CartBadge = () => {
  return (
    <div className="relative">
      <FontAwesomeIcon icon={faShoppingCart} className="block px-4 py-2 md:py-0"/>
      {itemCount > 0 && (
        <div className="absolute top-0 right-0 -mt-1 -mr-0 bg-red-500 rounded-full text-white text-xs flex items-center justify-center w-4 h-4">
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default CartBadge;
