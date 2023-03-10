import React, { useState } from "react";
import Link from 'next/link';

// assets
import { FaBars } from 'react-icons/fa'

//data
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/features/auth/authSlice'

export default function Header() {

  const currentUser = useSelector( ( state ) => state.auth.user )
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch( logout() )
  }

  const [ navbarOpen, setNavbarOpen ] = useState( false );
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gray-800 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Strapi Store
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={ () => setNavbarOpen( !navbarOpen ) }
            >
              <FaBars />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              ( navbarOpen ? " flex" : " hidden" )
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/store"
                >
                  Store
                </Link>
              </li>
              { currentUser ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/cart"
                    >
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      onClick={ onLogout }>
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/auth/login"
                  >
                    Login
                  </Link>
                </li>
              ) }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
