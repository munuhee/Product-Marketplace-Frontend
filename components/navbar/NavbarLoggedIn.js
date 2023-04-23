import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
const NavbarLoggedIn = () => {
    return (
      <>
        <Link href="/dashboard" legacyBehavior>
          <a className="block px-4 py-2 md:py-0">
            <FontAwesomeIcon
            icon={faBell}
            />
          </a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className="block px-4 py-2 md:py-0">Settings</a>
        </Link>
        <img className="rounded-full h-8 w-8 mr-2" src="https://via.placeholder.com/50" alt="Profile image" />
      </>
    )
  }
export default NavbarLoggedIn