
export interface ProductCategory {
    id: number
    name: string
    active: boolean
    created_user: string
    created_date: string
    updated_user: string
    updated_date: string
}

export interface ProductVariant {
    id: number
    productId: number
    imageUrl: string
    name: string
    code: string
    qty: number
    price: number
    active: boolean
    created_user: string
    created_date: string
    updated_user: string
    updated_date: string
}

export interface Product {
    id: number,
    plu: string,
    productCategoryId: number,
    name: string,
    active: boolean,
    created_user: string,
    created_date: string,
    updated_user: string,
    updated_date: string,
    productVariants: ProductVariant[]
}