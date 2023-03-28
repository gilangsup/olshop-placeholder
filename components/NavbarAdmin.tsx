import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import Link from 'next/link'


const NavbarAdmin = () => {
  return (
      <div className='container mx-auto'>
          <div className="navbar-start">
              <Link href="/" className="btn btn-ghost normal-case text-xl">OLShops</Link>
          </div>
          <div className="navbar-end">
              <button className="btn btn-square btn-ghost">
                  <BsFillCartCheckFill className='text-2xl' />
              </button>
          </div>
      </div>
  )
}

export default NavbarAdmin
