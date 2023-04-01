import { useState, Fragment, useCallback } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { isDialogOpen, isPromptDeleteOpen } from 'stores/dialogs/dialogSelector'
import { dialogSlice } from 'stores/dialogs/dialogSlice'
import { DIALOG_PRODUCT_CATEGORY_DELETE, DIALOG_PRODUCT_CATEGORY_EDIT } from '@/lib/constants'
import { axiosFetcher, axiosInstance } from '@/lib/axios'
import { toast } from 'react-toastify'
import useProductCategory from 'hooks/products/useProductCategory'
import { ProductCategory } from '@/types/product'


export default function EditProductCategory({ category }: { category: ProductCategory }) {
    // const [isOpen, setIsOpen] = useState(true)
    const isOpen = useSelector(isDialogOpen(DIALOG_PRODUCT_CATEGORY_EDIT))
    const dispatch = useDispatch()
    const { mutate } = useProductCategory()
    const [editedCategory, setEditedCategory] = useState({ ...category })

    const { register, handleSubmit, watch, formState: { errors } } = useForm<ProductCategory>({
        defaultValues: {
            ...category
        }
    });
    const onSubmit: SubmitHandler<ProductCategory> = async data => {
        console.log(data)
        try {
            const result = await axiosInstance.put(`/productCategories/${category.id}`,{
                 ...data
            })
            if (result) {
                mutate()
                toast("Edit Success!")
                handleCloseDialog()
            }
        } catch (error) {

        }
    };

    const handleCloseDialog = useCallback(
        () => {
            dispatch(dialogSlice.actions.toggleDialog({ type: DIALOG_PRODUCT_CATEGORY_EDIT, isOpen: false }))
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                Name
                            </label>
                            <input {...register("name", { required: true })} />
                            <button className='btn btn-ghost' type='submit'>Yes</button>
                            <button className='btn btn-ghost' onClick={handleCloseDialog}>Cancel</button>
                        </form>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </Transition>
    )
}