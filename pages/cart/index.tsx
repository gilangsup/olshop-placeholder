import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import { pushToCart } from 'stores/cart/cartSelector'

const Cart = () => {

  const userCart = useSelector(pushToCart)
  console.log(userCart)

  return (
    <div className='container mx-auto'>
      <Link href="/product" className='text-2xl my-5'>Kembali Belanja</Link>
      <h1 className='text-4xl my-5'>Your Cart</h1>
      <div className='grid grid-cols-3 p-5'>
        {userCart.map((carts: any) => {
          return (
            <div className='grid grid-cols-2'>
              <div>
                <img src={carts.imageUrl} className='w-[180px] h-[200px]' />
              </div>
              <div>
                <p className='text-center'>Variant Product : {carts.name}</p>
                <p className='text-center'>Jumlah : {carts.qty}</p>
                <p className='text-center'>Harga : Rp {carts.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
