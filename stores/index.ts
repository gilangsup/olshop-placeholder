import {
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { userSlice } from "./user";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "reduxjs-toolkit-persist";
import { persistReducer } from "redux-persist";
import storage from "reduxjs-toolkit-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./rootReducers";
import { cartSlice } from "./cart/cartStore";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            /* ignore persistance actions */
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

// export the action
export const userAction = userSlice.actions;
export const cartAction = cartSlice.actions;
