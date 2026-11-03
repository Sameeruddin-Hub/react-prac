import { useNavigate } from "react-router"
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'


export const useAuth = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let { register, handleSubmit, reset, getValues, formState: { errors } } = useForm()
    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || [])
    const registerForm = (data) => {
        let arr = [...registeredUsers, data]
        setRegisteredUsers(arr)
        localStorage.setItem('registeredUsers', JSON.stringify(arr))
    }

    const loginForm = (data) => {
        let user = registeredUsers.find((val) => val.email === data.email && val.password === data.password)
        if (!user) {
            toast.error('Invalid user credentials')
            return
        }
        dispatch(addUser(user));
        localStorage.setItem('loggedInuser', JSON.stringify(user))
        toast.success('Login successful')
        reset()
        navigate('/main')

    }
    return {
        navigate,
        register, handleSubmit, getValues, errors, registerForm, loginForm
    }
}