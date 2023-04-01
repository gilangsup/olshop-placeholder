import { DIALOG_PRODUCT_CATEGORY_DELETE, DIALOG_PRODUCT_CATEGORY_EDIT } from "@/lib/constants";
import { createSlice } from "@reduxjs/toolkit";
import { ReducerPayload } from "stores/rootReducers";


export const dialogSlice = createSlice({
    name: "dialog",
    initialState: {
        promptDelete: {
            isOpen: false,
            id: null,
        },
        editProduct: {
            isOpen: false,
        }
    },
    reducers: {
        openPromptDelete(state, {payload}) {
            state.promptDelete.isOpen = payload.isOpen
            state.promptDelete.id = payload.id
        },
        toggleEditProduct(state, {payload}) {
            state.editProduct.isOpen = payload.isOpen
        },
        toggleDialog(state, {payload}) {
            switch (payload.type) {
                case DIALOG_PRODUCT_CATEGORY_DELETE :
                    state.promptDelete.isOpen = payload.isOpen
                    state.promptDelete.id = payload.id
                    break;
                case DIALOG_PRODUCT_CATEGORY_EDIT :
                    state.editProduct.isOpen = payload.isOpen
                default:
                    break;
            }
        }
    },
});

export const userReducer = dialogSlice.reducer;
