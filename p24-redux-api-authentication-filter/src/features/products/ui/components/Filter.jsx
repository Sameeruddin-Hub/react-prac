import React from 'react'
import { useAllCategories } from '../../hooks/useProductHooks'

const Filter = ({ search, setSearch, category, setCategory }) => {
    // let categories = ['Groceries', 'Electronics', 'Softdrinks']
    let { data, isPending, error } = useAllCategories()
    if (isPending) return <h1>Loadin categoies </h1>
    return (
        <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow md:flex-row">
            <div className="w-full md:w-1/2" >
                <input type="text" placeholder='Search products..'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
            </div>

            <div className="w-full md:w-60">
                <select
                    value={category || ''} onChange={(e) => setCategory(e.target.value)}
                    // onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                >
                    <option value="">All Categories</option>

                    {data.map((item) => (
                        <option key={item.slug} value={item.slug}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
export default Filter;