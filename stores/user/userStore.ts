import { createSlice } from "@reduxjs/toolkit";
import { ReducerPayload } from "stores/rootReducers";
import UserInitialState from "./userInitialState";

export interface StoreUserPayload {
    id: number;
    email: string;
    role: string;
}

export const userSlice = createSlice({
    name: "user",
    initialState: UserInitialState,
    reducers: {
        storeUser(state, { payload }:ReducerPayload<StoreUserPayload> ) {
            state.currentUser = { ...payload}
        },
        clearUser(state) {
            state.currentUser = undefined
        }
    },
});

export const userReducer = userSlice.reducer;
