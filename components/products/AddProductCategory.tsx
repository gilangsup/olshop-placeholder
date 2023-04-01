import { axiosInstance } from '@/lib/axios'
import useProductCategory from 'hooks/products/useProductCategory'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddProductCategory = () => {

    const [category,setCategory] = useState('')
    const { mutate } = useProductCategory()

    const handleAdd = async (e: any) => {
        e.preventDefault()
        try {
            const result = await axiosInstance.post(`/productCategories`, {
                name: category
            })
            if (result) {
                mutate()
                toast("Delete Success!")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
          {/* The button to open modal */}
          <label htmlFor="my-modal-4" className="btn">Add Product</label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                  <form onSubmit={handleAdd}>
                      <div className="w-full">
                          <label className="label">
                              <span className="label-text">Nama Category</span>
                          </label>
                          <div className='relative'>
                              <input
                                  type="text"
                                  value={category}
                                  onChange={(e) => setCategory(e.target.value)}
                                  className="p-5 bg-[#3333330F] w-full border-t-0 border-l-0 border-r-0 border-[#00000061] placeholder:text-black rounded-tr rounded-tl focus:outline-none focus:rounded focus:ring-2 focus:ring-stay-primary"
                              />
                              <label htmlFor="" className='absolute bottom-5 right-5 cursor-pointer text-[#00000061]' >
                              
                              </label>
                          </div>
                      </div>
                      <button type='submit' className='btn bg-slate[700] my-10'>Add</button>
                  </form>
              </label>
          </label>
    </div>
  )
}

export default AddProductCategory
