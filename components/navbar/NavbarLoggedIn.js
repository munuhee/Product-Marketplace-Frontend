import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import CartBadge from '../order/CartBadge'
import { useSelector } from 'react-redux'

const NavbarLoggedIn = () => {
    const user = useSelector(state => state.auth.user);
    return (
      <>
        <Link href="/dashboard" legacyBehavior>
          <CartBadge/>
        </Link>
        <span>
         {user.username}
        </span>
        <span>

        </span>
        <Link href="/dashboard" legacyBehavior>
          <a className="block px-4 py-2 md:py-0">
            <FontAwesomeIcon
            icon={faBell}
            />
          </a>
        </Link>
        <Image
         className="rounded-full h-8 w-8 mr-2"
         src="https://via.placeholder.com/50"
         alt="Profile image"
         height={8}
         width={8}
         />
      </>
    )
  }
export default NavbarLoggedIn