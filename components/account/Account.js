import { faDollar, faCreditCard, faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Transactions from './Transactions'
import ContributorProducts from './ContributorProducts'

function Account() {
  return (
	<div className="min-h-screen">
		<div className="container p-10 mx-auto">
			<h1 className="text-4xl font-bold mb-6">Budget</h1>
			<div>
				<h3 className="text-lg font-semibold">YOUR BALANCE:</h3>
				<p className="text-5xl mb-6"> <FontAwesomeIcon icon={faDollar}/> 2,550.53</p>
				<div className="grid grid-cols-2 mb-6 p-6 rounded-md">
					<div className="flex flex-col items-center shadow-md p-5">
						<p className="text-lg font-semibold"><FontAwesomeIcon icon={faCreditCard} className="mr-2" /> YOUR BALANCE:</p>
						<p className="text-5xl font-semibold text-green-500"><FontAwesomeIcon icon={faDollar}/>1,045.50</p>
					</div>
					<div className="flex flex-col items-center shadow-md">
						<p className="text-lg font-semibold"><FontAwesomeIcon icon={faBoxOpen} className='mr-2'/> YOUR PRODUCTS:</p>
						<p className="text-5xl font-semibold text-red-500">7</p>
					</div>
				</div>
				<div className="grid grid-cols-2 rounded-md">
					<div className="flex flex-col">
						<h2 className="text-xl font-semibold">History</h2>
						<Transactions/>
					</div>

					<div className='flex flex-col'>
						<h2 className="text-xl font-semibold">Products</h2>
						<ContributorProducts/>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default Account