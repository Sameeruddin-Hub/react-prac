import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'

const PublicProtected = () => {
    let { user } = useSelector((state) => state.auth)
    if (user) {
        return <Navigate to={'/main'} />
    }
    return <Outlet />
}

export default PublicProtected