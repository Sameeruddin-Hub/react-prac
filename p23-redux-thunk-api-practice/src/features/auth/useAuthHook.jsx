import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { authAction } from './state/authActions';
import { useDispatch } from 'react-redux';

const useAuthHook = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onChange' })
    let navigate = useNavigate();
    let dispatch = useDispatch();

    const loginForm = (data) => {
        console.log(data)
        dispatch(authAction(data))
        reset()
        navigate('/main')
    }

    return {
        register, handleSubmit, loginForm, errors
    }

}

export default useAuthHook