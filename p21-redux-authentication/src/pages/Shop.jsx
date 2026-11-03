import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { useProductApi, useProductFilteration } from '../hooks/productsHook'
import Filter from '../components/Filter'
import axiosInstance from '../config/axiosInstance'
import { getProducts } from '../api/productApi'

const Shop = () => {
    // let { isPending, data, error, filteredProducts } = useProductApi();

    let { filterProductsfn, filteredProducts, isLoading } = useProductFilteration()


    // if (error) return <h1>{error.message}</h1>

    return (
        <div >
            <div>
                <Filter filterProductsfn={filterProductsfn} />
            </div>
            <div className='grid grid-cols-5 gap-6'>
                {isLoading ? Array.from({ length: 8 }).map((_, index) => (<ProductCardSkeleton key={index} />)) :
                    filteredProducts?.map((val) => <ProductCard key={val.id} product={val} />)
                }
            </div>
        </div>

    )
}

export default Shop