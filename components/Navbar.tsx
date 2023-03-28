import React from 'react'
import { useCookies } from 'react-cookie'
import { BsFillCartCheckFill } from 'react-icons/bs'
import Link from 'next/link'

const Navbar = () => {

    const [cookies, setCookies] = useCookies(['role'])

    console.log(cookies.role)

    return (
        <div className="navbar bg-slate-700 text-white">
            {cookies.role === 'admin' ? 
                <div className='container mx-auto'>
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost normal-case text-xl">OLShop</Link>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <BsFillCartCheckFill className='text-2xl' />
                        </button>
                    </div>
                </div> :
                <div className='container mx-auto'>
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost normal-case text-xl">OLShop</Link>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <BsFillCartCheckFill className='text-2xl' />
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar
