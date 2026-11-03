import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'

const MainProtected = () => {
    let { user } = useSelector((state) => state.auth)
    if (!user) {
        return <Navigate to={'/'} />
    }
    return <Outlet />
}

export default MainProtected