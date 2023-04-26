/* eslint-disable react/button-has-type */

'use client'

import Link from 'next/link'
import { useState } from 'react'
import LogoIcon from './icons/Logo'
import MenuIcon from './icons/Menu'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-dark p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <LogoIcon />
        <span className="font-semibold text-xl tracking-tight">Posts App</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <MenuIcon />
        </button>
      </div>
      {isOpen ? (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/posts">
              <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Posts
              </p>
            </Link>
            <Link href="/explore">
              <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Explore
              </p>
            </Link>
            <Link href="/users">
              <p className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Contacts
              </p>
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}
