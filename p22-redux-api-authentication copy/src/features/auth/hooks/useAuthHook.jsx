import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { loginUserApi } from '../api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../state/authSlice'
import { toast } from 'react-toastify'
import { loginUserAction } from '../state/authAction'

export const useAuthHook = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const { register, handleSubmit, reset, getValues, formState: { errors } } = useForm({ mode: 'onChange' })
    // const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem('registeredUsers')) || [])


    const registerForm = (data) => {
        // let arr = [...registeredUsers, data]
        // setRegisteredUsers(arr)
        // localStorage.setItem('registeredUsers', JSON.stringify(arr))
        console.log(data, 'registerform')
    }

    const loginForm = async (data) => {
        try {

            // let response = await loginUserApi(data)
            dispatch(loginUserAction(data))
            // localStorage.setItem('accessToken', response.accessToken)
            reset()
            // console.log(response)
        } catch (error) {
            console.log('api error form authHook', error)
        }

    }


    return {
        navigate,
        register,
        handleSubmit,
        getValues,
        errors,
        registerForm,
        loginForm
    }
}
