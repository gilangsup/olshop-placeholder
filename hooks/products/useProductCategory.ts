import useSWR from 'swr'
import { axiosFetcher } from '@/lib/axios'
import { ProductCategory } from '@/types/product'


export default function useProductCategory() {
    const { data, error, isLoading, mutate } = useSWR<ProductCategory[]>('/productCategories', axiosFetcher)

    return { data, error, isLoading, mutate } 
}

