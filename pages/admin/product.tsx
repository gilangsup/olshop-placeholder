import Navbar from '@/components/Navbar'
import ProductCategoryList from '@/components/products/ProductCategoryList'
import React from 'react'

const product = () => {

    return (
        <div>
            <Navbar />
            <div className='flex'>
                <ProductCategoryList />
            </div>
        </div>
    )
}

export default product
