import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { store } from '../../app/store';
import { useSelector } from 'react-redux'
const PublicProtected = () => {
    let { isAthuenticated, user, isLoading } = useSelector((store) => store.auth);
    if (isLoading) return <h1>Loading State...</h1>
    if (user) {
        return <Navigate to={'/main'} />;
    }
    return <Outlet />

}

export default PublicProtected