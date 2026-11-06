import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk('auth/login',
    async (credentials, thunkApi) => {
        try {

            let response = await api.post('auth/login', credentials)
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue('login failed')
        }
    })

export const hydrateUserAction = createAsyncThunk('/auth/hydrate', async (_, thunkApi) => {
    let token = localStorage.getItem('accessToken')
    console.log(token)
    try {
        let res = await api.get('auth/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log('response from hydration', res)
        return res.data
    } catch (error) {
        toast
        return thunkApi.rejectWithValue('Unauhtorized User')
    }
})