import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout