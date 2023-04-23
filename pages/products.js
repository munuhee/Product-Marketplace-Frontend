import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@/store/actions/productsActions';
import { useEffect } from 'react';
import Image from 'next/image';



export default function Products() {
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
      <Head>
        <title>Products - My Ecommerce App</title>
      </Head>
      <div className="min-h-screen mx-auto">
        <h1 className="text-3xl font-bold  mb-4">Products</h1>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product)=>(
          <div key={product.id} className="rounded-lg overflow-hidden">
          <Image
             src={product.image}
             alt="Product Image"
             className="w-full"
             width={300}
             height={300}
             />
            <div className="p-4">
              <h2 className="text-lg font-medium  mb-2">{product.name}</h2>
              <p className="mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
