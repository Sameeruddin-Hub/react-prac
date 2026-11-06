import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Login from '../features/auth/ui/pages/Login'
import App from '../App'
import ProtectedRoute from '../ProtectedRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hydrateAction } from '../features/auth/state/authActions';
const Refresh = () => {
    let { isLoading, user } = useSelector((state) => state.auth)
    if (isLoading) return <h1>Please wait</h1>
    if (!user) return <Login />

    return <Navigate to={'/main'} />
}

export const AppRoutes = () => {
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            try {
                dispatch(hydrateAction())
            } catch (error) {
                console.log('error in router api hydration')
            }
        })()
    }, [])
    let router = createBrowserRouter([
        {
            path: '/',
            element: <Refresh />
        },
        {
            path: '/main',
            element: <ProtectedRoute />,
            children: [
                {
                    path: '',
                    element: <App />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

