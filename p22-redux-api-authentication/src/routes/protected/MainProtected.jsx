import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { store } from '../../app/store'

const MainProtected = () => {
    let { isAthuenticated, user, isLoading } = useSelector((store) => store.auth);
    if (isLoading) return <h1>Loading State...</h1>

    if (!user) {
        return <Navigate to={'/'} />;
    }
    return <Outlet />

}

export default MainProtected