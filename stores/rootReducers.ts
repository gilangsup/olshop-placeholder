import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web
import { cartSlice } from "./cart/cartStore";
import { dialogSlice } from "./dialogs/dialogSlice";
import { userSlice } from "./user";

export interface ReducerPayload<T> {
    payload: T;
}


const userPersistConfig = {
    key: "user",
    storage,
};

const cartPersistConfig = {
    key: "cart",
    storage,
};

export const reducers = {
    user: persistReducer(userPersistConfig, userSlice.reducer),
    dialog: dialogSlice.reducer,
    cart: persistReducer(cartPersistConfig, cartSlice.reducer)
};

const appReducer = combineReducers(reducers);



export type RootState = ReturnType<typeof appReducer>;

export default appReducer;
