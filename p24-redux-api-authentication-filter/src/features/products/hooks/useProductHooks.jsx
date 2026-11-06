import { isPending } from "@reduxjs/toolkit";
import { getAllProductsApi, getProductsCategories, getProductByCategory } from "../api/productsApis"
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react';


export const useAllProduct = () => {
    const [search, setSearch] = useState()
    const [debouncingSearch, setDebouncingSearch] = useState(null);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setDebouncingSearch(search)
        }, 1000);

        return () => clearTimeout(timeout);
    }, [search]);
    let { data, isPending, errors } = useQuery({
        queryKey: ['products', debouncingSearch],
        queryFn: () => getAllProductsApi(debouncingSearch)
    })
    return {
        data, isPending, errors, search, setSearch
    }
}



export const useAllCategories = () => {
    return useQuery({
        queryKey: ['AllCategories'],
        queryFn: getProductsCategories,
    });

}

export const useProductByCategory = () => {
    const [category, setCategory] = useState(null);
    let { data } = useQuery(
        {
            queryKey: ['productsByCategory', category],
            queryFn: () => getProductByCategory(category),
        }
    )
    console.log(data, 'category')
    return {
        data, category, setCategory,
    }
}