import React, { useState, useContext } from 'react'
// import { Auth } from '../context/AuthContext'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    let { user } = useSelector((state) => state.auth);
    console.log(user)
    if (!user) {
        return <Navigate to={'/'} />

    }
    return <Outlet />
}

export default ProtectedRoute