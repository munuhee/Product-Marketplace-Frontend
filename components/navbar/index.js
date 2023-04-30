import Link from 'next/link'
import NavbarLoggedIn from './NavbarLoggedIn'
import NavbarNotLoggedIn from './NavbarNotLoggedIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isLoggedIn, username, toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between flex-wrap p-4 shadow-lg bg-white">
      <div className="flex items-center flex-shrink-0 mr-6">
        <Link href="/" legacyBehavior>
          <a className="font-bold text-xl tracking-tight">Ecommerce App</a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className="block px-4 py-2 md:py-0 ">Vectors</a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className="block px-4 py-2 md:py-0 ">Photos</a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className="block px-4 py-2 md:py-0 ">Templates</a>
        </Link>
        <Link href="/settings" legacyBehavior>
          <a className="block px-4 py-2 md:py-0 ">Categories</a>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        {isLoggedIn ? <NavbarLoggedIn username={username} /> : <NavbarNotLoggedIn />}
      </div>
    </nav>
  )
}

export default Navbar
