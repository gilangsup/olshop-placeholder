import { Product } from '@/types/product'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from 'stores'
import { CartProduct } from 'stores/cart/cartInitialState'

interface CardProductProps {
    productData: Product,
}

const CardProduct = ({ productData }: CardProductProps) => {
    const { name, productVariants } = productData
    const [selectedVariantId, setSelectedVariantId] = useState(productVariants?.[0]?.id)
    const selectedVariant = productVariants.find(productVariant => productVariant.id === selectedVariantId)

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        if(selectedVariant) {
            const payloadVariant: CartProduct = { ...selectedVariant, qty: 1}
            dispatch(cartAction.addToCart(payloadVariant))
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl container mx-auto">
            <div>
                <figure className='w-[380px] h-[240px]'><img src={selectedVariant?.imageUrl} /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <h1 className='card-title text-sm'>Pilih Variants</h1>
                {/* <p>{price}</p> */}
                {/* <p>{qty}</p> */}
                {productVariants?.map((productVariant) => {
                    return (
                        <div>
                            <a className='link link-hover text-sm' onClick={() => setSelectedVariantId(productVariant.id)}>
                                <div className='grid grid-cols-2 gap-4'>
                                    <p>{productVariant.name}</p>
                                    <p>RP {productVariant.price}</p>
                                    <p>Stock {productVariant.qty}</p>
                                </div>
                            </a>
                        </div>
                    )
                })}
                <div className="card-actions justify-center">
                    <button className="btn btn-primary my-3" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default CardProduct
