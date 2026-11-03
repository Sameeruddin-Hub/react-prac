import React, { useState, useContext } from 'react'
// import { Auth } from '../context/AuthContext'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    let { user } = useSelector((state) => state.auth);
    console.log(user)
    if (!user) {
        return <Outlet />

    }
    return <Navigate to={'/home'} />

}

export default PublicRoute