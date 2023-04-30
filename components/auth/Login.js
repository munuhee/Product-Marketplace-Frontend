import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { login, loginSuccess } from '../../store/actions/authActions';

function Login() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(username, password))
      .then((user) => {
        if (user) {
          dispatch(loginSuccess(user.accessToken, user.refreshToken, user));
          window.location.href = '/products';
        }
      });
  };

  return (
        <div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
            <div className="bg-black opacity-20 inset-0 z-0">
            </div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
              <p className="text-white mt-1">The simplest app to use</p>
              <div className="flex justify-center lg:justify-start mt-6">
                  <Link href="/auth/register" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</Link>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <FontAwesomeIcon
                  className="h-5 w-5 text-gray-400"
                  icon={faEnvelope}
                  />
                <input
                  id="username"
                  className="pl-2 w-full outline-none border-none text-gray-400"
                  type="text"
                  name="username"
                  placeholder="Email Address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
              <FontAwesomeIcon
                className="h-5 w-5 text-gray-400"
                icon={faLock}
                />
                <input
                  id="password"
                  className="pl-2 w-full outline-none border-none text-gray-400"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleLogin} type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
              {/* Render loading spinner or error message based on state */}
              {isLoading && <p>Loading...</p>}
              {error && <p>{error.message}</p>}
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>
                <Link href="/auth/register" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"> Do not have an account yet? </Link>
              </div>

            </form>
            </div>

          </div>
      </div>
  )
}

export default Login