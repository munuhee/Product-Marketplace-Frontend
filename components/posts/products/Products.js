import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import ProductPageSidebar from './SideBar';
import Pagination from './Pagination';
import SearchBar from './ProductsSearchbar';
import Tab from './Tab';


function Products() {
  return (
    <div className='grid grid-cols-6 h-screen relative'>
      <div className='col-span-1 relative top-0 left-0 h-full z-10'>
        <ProductPageSidebar />
      </div>
      <div className='col-span-5 m-10 relative'>
        <div className='mb-4'>
          <SearchBar/>
        </div>
        <div className='mb-4'><Tab/></div>
        <div className='grid grid-cols-3 relative z-0'>
          <ProductCard/>
        </div>
        <div className='flex justify-center mt-10 relative z-10'>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Products;
