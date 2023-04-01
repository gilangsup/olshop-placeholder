import { createSlice } from "@reduxjs/toolkit";
import { ReducerPayload } from "stores/rootReducers";
import CartInitialState, { CartProduct } from "./cartInitialState";

// export interface StoreCartPayload {
//     id: number;
//     email: string;
//     role: string;
// }



export const cartSlice = createSlice({
    name: "cart",
    initialState: CartInitialState,
    reducers: {
        addToCart(state, { payload }: ReducerPayload<CartProduct>) {
            state.list = [ ...state.list, payload ]
        },
    },
});

export const cartReducer = cartSlice.reducer;
