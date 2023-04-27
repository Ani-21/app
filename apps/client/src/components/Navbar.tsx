'use client'

import Link from 'next/link'
import LogoIcon from './icons/Logo'

const Navbar = () => (
  <header className="bg-dark flex justify-around items-center py-[25px] text-white">
    <Link href="/">
      <div className="flex gap-3 cursor-pointer">
        <LogoIcon />
        <h1 className="font-bold text-xl tracking-tight">Posts App</h1>
      </div>
    </Link>
    <nav className="flex gap-5">
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
)

export default Navbar
