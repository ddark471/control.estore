import React from 'react'
import { fetchProducts } from 'services/fetchProducts'
import { useQuery } from '@tanstack/react-query'

export const useFetchProducts = () => {
    const {data, error} = useQuery({
        queryKey: ["Fetch products"], 
        queryFn: () => fetchProducts()
    })

    return {data, error}
}
