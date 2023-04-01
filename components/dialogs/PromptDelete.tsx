import { useState, Fragment, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { isPromptDeleteOpen } from 'stores/dialogs/dialogSelector'
import { dialogSlice } from 'stores/dialogs/dialogSlice'
import { DIALOG_PRODUCT_CATEGORY_DELETE } from '@/lib/constants'
import { axiosFetcher, axiosInstance } from '@/lib/axios'
import { toast } from 'react-toastify'
import useProductCategory from 'hooks/products/useProductCategory'
import EditProductCategory from './EditProductCategory'

export default function PromptDelete({ id }: { id: number }) {
    // const [isOpen, setIsOpen] = useState(true)
    const isOpen = useSelector(isPromptDeleteOpen(id))
    const dispatch = useDispatch()
    const { mutate } = useProductCategory()

    const handleCloseDialog = useCallback(
      () => {
       dispatch(dialogSlice.actions.toggleDialog({type: DIALOG_PRODUCT_CATEGORY_DELETE, isOpen: false})) 
      },
      [],
    )
    

    const handleDelete = useCallback(
      async () => {
        try {
            const result = await axiosInstance.delete(`/productCategories/${id}`)
            if (result) {
                mutate()
                toast("Add New Category Success!")
                handleCloseDialog()
            }
        } catch (error) {
            
        }
      },
      [],
    )
    

    return (
        <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            as={Fragment}
        >
            <Dialog className="relative z-50" open={isOpen} onClose={handleCloseDialog}>
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen container to center the panel */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-8 space-y-4">
                        <Dialog.Title>Delete Product Category</Dialog.Title>
                        <Dialog.Description>
                            Are you sure want to delete this category?
                        </Dialog.Description>
                        <button className='btn btn-ghost' onClick={handleDelete}>Yes</button>
                        <button className='btn btn-ghost' onClick={handleCloseDialog}>Cancel</button>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}