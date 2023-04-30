import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import Favorite from './favorite-button/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@/store/actions/productsActions';
import { useEffect } from 'react';
const ProductCard = () => {
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error)
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchProducts())
    },[dispatch])

    if(loading){
      return <p>loading</p>
    }
    if(error){
      return <p>error</p>
    }
  return (
    <>
    {products.map((product)=>(
      <div  key={product.id} tabIndex="0" className="rounded focus:outline-none mx-2 w-72 mb-4 shadow-md flex flex-col">
          <div>
              <Image
                alt="person capturing an image"
                src="https://res.cloudinary.com/murste/image/upload/v1619359682/ecom_xrzgmm.jpg"
                tabIndex="0"
                className="focus:outline-none w-full h-44"
                width={100}
                height={100}
                />
          </div>
          <div className="bg-white">
              <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                      <Favorite/>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                      <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">
                        <FontAwesomeIcon
                        icon={faDollarSign}
                        className='mr-2'
                        />
                          4.50
                        </p>
                  </div>
              </div>
              <div className="p-4">
                  <div className="flex items-center">
                      <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">{product.name}</h2>
                      <p tabIndex="0" className="focus:outline-none text-xs text-yellow-500 pl-5">
                        <FontAwesomeIcon
                        icon={faStar}
                        className='mr-2'
                        />{product.price}
                        </p>
                  </div>
                  <div className="flex mt-4">
                      <div>
                          <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">{product.category}</p>
                      </div>
                      <div className="pl-2">
                          <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    ))}
    </>
  );
};

export default ProductCard;

