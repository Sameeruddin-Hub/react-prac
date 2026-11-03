import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import Home from '../pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addUser } from '../features/authSlice'

import Login from '../pages/Login'
import Register from '../pages/Register'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import { toast } from 'react-toastify'




const AppRoutes = () => {
    let dispatch = useDispatch()

    const hydrateuser = () => {
        let loggedInuser = JSON.parse(localStorage.getItem('loggedUser'))
        if (!loggedInuser) {
            toast.error('Please login to continue')
            return
        }
        dispatch(addUser(loggedInuser))
    }
    useEffect(() => {
        hydrateuser()
    }, [])
    // let user = JSON.parse(localStorage.getItem('loggedUser')) || null

    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicRoute />,
            children: [
                {
                    path: '',
                    element: <AuthLayout />,
                    children: [
                        {
                            path: '',
                            element: <Login />
                        },
                        {
                            path: '/register',
                            element: <Register />
                        }
                    ]
                }
            ]
        }
        , {
            path: '/home',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <MainLayout />,
                    children: [
                        {
                            path: '',
                            element: <Home />

                        },
                        {
                            path: 'shop',
                            element: <Shop />
                        },
                        {
                            path: 'cart',
                            element: <Cart />
                        },
                    ]
                }
            ]

        }

    ])
    return <RouterProvider router={router} />
}

export default AppRoutes