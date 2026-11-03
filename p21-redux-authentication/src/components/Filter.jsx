import React from 'react'
import { useProductApi } from '../hooks/productsHook'

const Filter = ({ filterProductsfn }) => {
    // let { filterProducts } = useProductApi();
    return (
        <div className=' flex gap-4  bg-zinc-900 p-3 border border-zinc-800 rounded-xl mt-4 mb-4'>
            <input onChange={(e) => filterProductsfn(e.target.value)} type="text" className='w-full p-3 bg-zinc-800 rounded-2xl' placeholder='search products' />
            <button className='py-3 px-4 bg-olive-500 rounded-2xl '>Search</button>
            <div>
                <span>Select categories</span>
                <select name="" className='p-2 bg-zinc-800 rounded-xl' id="">
                    <option value="groceries">Groceries</option>
                    <option value="beauty">Beauty</option>
                    <option value="furniture">Furniture</option>

                </select>
            </div>
        </div>
    )
}

export default Filter