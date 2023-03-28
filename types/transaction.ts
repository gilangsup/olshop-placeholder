export interface Transaction {
    id: number
    transaction_no: number
    total_amount: number
    active: boolean
    userId: number
    createdAt: string
    lastUpdateAt: string
    transactionDetails: TrancationDetail[]
}

export interface TrancationDetail {
    id: number
    transaction_id: number
    product_variant_id: number
    price: number
    qty: number
    subtotal: number
    active: boolean
}