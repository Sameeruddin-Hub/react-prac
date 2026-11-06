import { createBrowserRouter, RouterProvider } from 'react-router'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layout/AuthLayout'
import Login from '../features/auth/ui/pages/Login'
import Register from '../features/auth/ui/pages/Register'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layout/MainLayout'
import Home from '../shared/ui/pages/Home'
import ProductsPage from '../features/products/ui/pages/ProductsPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import OrdersPage from '../features/orders/ui/pages/OrdersPage'
import { useEffect } from 'react'
import { hydrateUser } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'
import { hydrateUserAction } from '../features/auth/state/authAction'
import About from '../shared/ui/pages/About'

const AppRoutes = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        (() => {
            try {

                dispatch(hydrateUserAction())
            } catch (error) {
                console.log('error in approutes', error)
            }
        })();
    }, [])
    let router = createBrowserRouter([
        {
            path: '/',
            element: <PublicProtected />,
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
                            path: 'register',
                            element: <Register />
                        }
                    ]
                }
            ]
        },
        {
            path: '/main',
            element: <MainProtected />,
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
                            path: 'products',
                            element: <ProductsPage />
                        },
                        {
                            path: 'cart',
                            element: <CartPage />
                        },
                        {
                            path: 'orders',
                            element: <OrdersPage />
                        },
                        {
                            path: 'about',
                            element: <About />
                        }
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
