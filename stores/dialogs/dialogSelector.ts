import { DIALOG_PRODUCT_CATEGORY_EDIT } from "@/lib/constants";
import type { RootState } from "stores/rootReducers";
import { dialogSlice } from "./dialogSlice";


export const isPromptDeleteOpen = (id:number) => {
    return ({ dialog }: RootState) => {
        return dialog.promptDelete.id === id
    }
} 

export const isDialogOpen = (type: string, id?: number) => {

    return ({ dialog }: RootState) => {
        switch (type) {
            case DIALOG_PRODUCT_CATEGORY_EDIT:
                return dialog.editProduct.isOpen
            default:
                break;
        }
        return dialog.promptDelete.id === id
    }
} 