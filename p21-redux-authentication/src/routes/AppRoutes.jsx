import { createBrowserRouter, RouterProvider } from 'react-router'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { lazy, Suspense } from 'react'


const AuthLayout = lazy(() => import('../Layout/AuthLayout'))
const MainProtected = lazy(() => import('./protected/MainProtected'))
const PublicProtected = lazy(() => import('./protected/PublicProtected'))
const Home = lazy(() => import('../pages/Home'))
const Login = lazy(() => import('../pages/Login'))
const Shop = lazy(() => import('../pages/Shop'))
const About = lazy(() => import('../pages/About'))
const Register = lazy(() => import('../pages/Register'))
const MainLayout = lazy(() => import('../Layout/MainLayout'))






const AppRoutes = () => {
    let dispatch = useDispatch()

    const hydrateuser = () => {
        let loggedInuser = JSON.parse(localStorage.getItem('loggedInuser'))
        if (!loggedInuser) {
            toast.error('Please login to continue')
            return
        }
        dispatch(addUser(loggedInuser))
    }
    useEffect(() => {
        hydrateuser()
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
                            element: <Login />,

                        }
                        ,
                        {
                            path: '/register',
                            element: <Register />
                        }
                    ]
                }
            ]
        }, {
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
                            path: 'shop',
                            element: <Shop />
                        },
                        {
                            path: 'about',
                            element: <About />
                        }
                    ]
                }



            ]

        }
    ]

    )
    return <RouterProvider router={router}></RouterProvider>
}
export default AppRoutes