import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
const PublicProtected = () => {
    let { isAthuenticated, user, isLoading } = useSelector((state) => state.auth);
    if (isLoading) return <h1>Loading State...</h1>
    if (user) {
        return <Navigate to={'/main'} />;
    }
    return <Outlet />

}

export default PublicProtected