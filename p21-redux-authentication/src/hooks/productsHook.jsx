import { useQuery } from "@tanstack/react-query";
import { getProducts } from '../api/productApi'
import { useState, useEffect } from "react";


export const useProductApi = () => {
    // let [filteredProducts, setFilteredProducts] = useState();
    let { data, isPending, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 5000,
    });



    return {
        data, isPending, error, filteredProducts
    }
}


export const useProductFilteration = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    let getProduct = async () => {
        let res = await getProducts()
        setProductsData(res)
        setFilteredProducts(res)
        setIsLoading(false)

    }

    useEffect(() => {
        getProduct()
    }, [])

    let filterProductsfn = (searchparam) => {
        // console.log(productsData)
        let filteredData = productsData.filter((val) => val.title.toLowerCase().includes(searchparam.toLowerCase()))


        if (filteredProducts) {
            setFilteredProducts(filteredData)
        }

    }

    return {
        filterProductsfn, filteredProducts, setFilteredProducts, isLoading
    }

}