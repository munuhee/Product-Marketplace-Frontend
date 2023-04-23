import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const vendorData = {
  name: 'Example Vendor',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est nec felis tempor interdum.',
  rating: 4.5,
  earnings: 2500,
  products: [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 15 },
    { name: 'Product 3', price: 20 },
  ],
  profileImage: '/images/vendor-profile.jpg',
}

const VendorProfile = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{vendorData.name}</h2>
            <div className="flex flex-row items-center mt-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
              <p className="text-gray-600">{vendorData.rating} ({vendorData.products.length} products)</p>
            </div>
            <div className="mt-2 flex flex-row items-center">
              <FontAwesomeIcon icon={faMoneyBill} className="text-green-500 mr-1" />
              <p className="text-gray-600">${vendorData.earnings} earned</p>
            </div>
            <p className="mt-3 text-gray-600">{vendorData.description}</p>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image src={vendorData.profileImage} alt={vendorData.name} className="rounded-full" width={80} height={80} />
                <span className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Products</h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {vendorData.products.map(product => (
                <div key={product.name} className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">{product.name}</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">${product.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorProfile
