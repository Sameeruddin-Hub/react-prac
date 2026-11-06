import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com/'
})
export const authAction = createAsyncThunk('auth/login',
    async (credentials, thunkApi) => {
        try {
            let res = await api.post('auth/login', credentials)
            localStorage.setItem('accessToken', res.data.accessToken)
            console.log(res.data)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue('error in thunk api call')
        }
    })


export const hydrateAction = createAsyncThunk('auth/hydrate',
    async (_, thunkApi) => {
        let token = localStorage.getItem('accessToken')
        try {
            let res = await api.get('auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(res.data, 'hydration')
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue('Unathorized user')
        }

    })