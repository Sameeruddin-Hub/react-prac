import React from 'react'
import { NavLink } from 'react-router'
import { LogOut } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-8 '>
            <h1>
                SkyDart
            </h1>
            <div className='flex gap-6'>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-green-600' : ''
                } end to={'/main'}>Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-green-600' : ''
                } to={'/main/about'}>About</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'text-green-600' : ''
                } to={'/main/shop'}>Shop</NavLink>

            </div>
            <div className='flex gap-4'>
                <h2>
                    Hey , <strong>Dev</strong>

                </h2>
                <button className='cursor-pointer'>
                    <LogOut size={18} />
                </button>
            </div>

        </nav>
    )
}

export default Navbar