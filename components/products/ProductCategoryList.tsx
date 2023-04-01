import useProductCategory from 'hooks/products/useProductCategory'
import React, { useState } from 'react'
import { useCallback } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { dialogSlice } from 'stores/dialogs/dialogSlice'
import PromptDelete from '../dialogs/PromptDelete'
import AddProductCategory from './AddProductCategory'
import { DIALOG_PRODUCT_CATEGORY_DELETE, DIALOG_PRODUCT_CATEGORY_EDIT } from '@/lib/constants'
import EditProductCategory from '../dialogs/EditProductCategory'
import { ProductCategory } from '@/types/product'



const ProductCategoryList = () => {


  const [selectedCategory,setSelectedCategory] = useState<ProductCategory | undefined>()
  const { data, error, isLoading } = useProductCategory()
  const dispatch = useDispatch()

  const handleDelete = useCallback(
    (productCategory: ProductCategory) => {
      setSelectedCategory(productCategory)
      dispatch(dialogSlice.actions.toggleDialog({type: DIALOG_PRODUCT_CATEGORY_DELETE, isOpen: true, id: productCategory.id }))
    },
    [],
  )

  const handleEdit = useCallback(
    (productCategory: ProductCategory) => {
      setSelectedCategory(productCategory)
      dispatch(dialogSlice.actions.toggleDialog({ type: DIALOG_PRODUCT_CATEGORY_EDIT, isOpen: true,}))
    },
    [],
  )

  return (
    <div className='container mx-auto py-10 space-y-6 max-w-[500px]'>
      <div className='flex justify-between'>
        <h1 className='text-2xl'>Product Category</h1>
        <AddProductCategory/>
      </div>
      {selectedCategory && <PromptDelete id={selectedCategory.id} />}
      {selectedCategory && <EditProductCategory category={selectedCategory}/>}
      <div className="overflow-x-auto">
        <table className="table w-[300px]">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((productCategory, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{productCategory.name}</td>
                <td className='space-x-4 h-full cursor-pointer'>
                  <button onClick={() => handleDelete(productCategory)} className='align-middle'><AiFillDelete /></button>
                  <button onClick={() => handleEdit(productCategory)}className='align-middle'><AiFillEdit /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )


}

export default ProductCategoryList
