import React from 'react'
import { NavLink } from 'react-router'
import { ShoppingCart, Box } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between p-8 bg-amber-200'>
            <h2>vivomer</h2>
            <div className='flex gap-4'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-blue-500' : 'text-black'
                } end to={'/main'} >Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-blue-500' : 'text-black'
                } to={'/main/products'} >Store</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-blue-500' : 'text-black'
                } to={'/main/ABout'} >About</NavLink>
            </div>
            <div className='flex gap-3 items-center'>
                <NavLink to={'/main/cart'}>
                    <ShoppingCart />
                </NavLink>
                <NavLink to={'/main/orders'}>
                    <Box />
                </NavLink>

                <button className='py-2 px-4 bg-zinc-900 text-white rounded-xl'>logout</button>
            </div>
        </nav>
    )
}

export default Navbar