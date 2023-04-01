import type { RootState } from "stores/rootReducers";

export const pushToCart = ({ cart }: RootState) => {
    return cart.list;
};
