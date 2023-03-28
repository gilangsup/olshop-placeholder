import CardProduct from '@/components/CardProduct'
import Navbar from '@/components/Navbar'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Product } from '@/types/product'

const index = () => {

    const [products,setProduct] = useState<Product[]>([])

    const getProduct = async () => {
        await axios.get(`http://localhost:3004/products?_embed=productVariants`)
        .then(res => {
            const result = res.data
            console.log(result)
            setProduct(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProduct()
    },[])
    

    return (
        <div>
            <Navbar />
            <h1 className='text-center my-10 text-4xl'>Our Products</h1>
            <div className='container mx-auto'>
                <div className='grid xl:grid-cols-3 gap-4'>
                    {products? (products.map((product) => {
                        return (
                            <CardProduct
                               productData={product}
                            />
                        )
                        
                    })): <></>}
                </div>
            </div>
        </div>
    )
}

export default index
