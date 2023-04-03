import React from 'react'
import { useCookies } from 'react-cookie'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { getCurrentUserData } from 'stores/user/userSelector'
import { pushToCart } from 'stores/cart/cartSelector'

const Navbar = () => {

    const [cookies, setCookies] = useCookies(['role'])
    const currentUser = useSelector(getCurrentUserData)
    const userCart = useSelector(pushToCart)

    console.log('cart', userCart.length)

    return (
        <div className="navbar bg-slate-700 text-white">
            {currentUser.role === 'admin' ?
                <div className='container mx-auto '>
                    <div className="navbar-start">
                        <Link href="/" className="btn btn-ghost normal-case text-xl">OLShops</Link>
                    </div>
                    <div className="navbar-center">
                        <Link href='/admin/product' className='normal-case text-lg p-5'>
                            Add Product</Link>
                        <Link href='#' className='normal-case text-lg p-5'>Transaksi</Link>
                    </div>
                    <div className="justify-end">
                        <button className="btn btn-square btn-ghost">
                            <BsFillCartCheckFill className='text-2xl' />
                        </button>
                    </div>
                </div> :
                <div className='container mx-auto'>
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost normal-case text-xl">OLShop</Link>
                    </div>
                    <div className="flex-1">
                        <Link href="/product" className="btn btn-ghost normal-case text-xl">Belanja</Link>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <Link href='cart'><BsFillCartCheckFill className='text-2xl' /></Link>
                            <p className=' text-lg text-red-700 mb-5 bg-white rounded-full'>{userCart.length}</p>
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}

export default Navbar
