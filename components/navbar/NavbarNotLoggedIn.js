import React from 'react'
import Link from 'next/link'

export const NavbarNotLoggedIn = () => {
    return (
      <>
        <Link href="/auth/register" legacyBehavior>
          <button className="font-semibold py-2 px-4 rounded">
            Sign up Free
          </button>
        </Link>
      </>
    )
  }
  export default NavbarNotLoggedIn