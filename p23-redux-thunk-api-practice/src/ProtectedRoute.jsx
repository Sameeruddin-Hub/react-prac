import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'


const ProtectedRoute = () => {
    console.log('protectedroutes')
    let { user, isLoading } = useSelector((state) => state.auth)
    console.log(user, isLoading)
    if (isLoading) return <h1>Loading here</h1>
    if (user) return <Outlet />

    return <Navigate to={'/'} />
}

export default ProtectedRoute