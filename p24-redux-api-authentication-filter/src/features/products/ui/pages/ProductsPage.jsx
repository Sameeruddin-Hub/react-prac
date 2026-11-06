import React, { useState } from 'react'
import { useAllProduct, useProductByCategory } from '../../hooks/useProductHooks'
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

const ProductsPage = () => {
    let { data, isPending, errors, search, setSearch } = useAllProduct();
    let { data: productsByCategory, category, setCategory } = useProductByCategory();



    if (isPending) return <h1>Loading products</h1>

    return (
        <div>
            <Filter category={category} setCategory={setCategory} search={search} setSearch={setSearch} />
            <div className='grid grid-cols-5 gap-6 p-12 sm:grid-cols-2 md:grid-cols-3'>
                {
                    productsByCategory?.products.length ? productsByCategory?.products.map((val) => (
                        <ProductCard key={val.id} product={val} />
                    ))
                        : data?.products.map((val) => (
                            <ProductCard key={val.id} product={val} />
                        ))
                }
            </div>
        </div>
    )
}

export default ProductsPage