import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider.jsx';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { authToken, logout } = useAuth();

  return (
    <header className="text-white body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row">
        <Link className="flex title-font font-medium text-white mb-4 md:mb-0 pr-4" to="/">
          <span className="ml-3 text-3xl">NonsafeSystem</span>
        </Link>
        <button
          className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          className={`md:flex flex-grow items-center ${navbarOpen ? "flex" : "hidden"}`}
          id="example-navbar-danger"
        >
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7">
            <Link className="mr-6 hover:text-white" to="/">Home</Link>
            <Link className="mr-6 hover:text-white" to="/articles">Articles</Link>
          </nav>
          {authToken ? (
            <button
              className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-red-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  Create Account
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
