import { ProductVariant } from "@/types/product";

export interface CartProduct extends ProductVariant {
    qty: number;
}

export interface CurrentCart {
    list: CartProduct[];
}
const CartInitialState: CurrentCart = { list: [] };

export default CartInitialState;
