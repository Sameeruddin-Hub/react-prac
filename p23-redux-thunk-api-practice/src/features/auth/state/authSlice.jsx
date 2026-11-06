import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { authAction, hydrateAction } from './authActions'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading: true,
    },
    // reducers: {

    // },
    extraReducers: (builder) => {
        builder
            .addCase(authAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(authAction.fulfilled, (state, action) => {
                state.user = action.payload;
                console.log(state.user, 'user')
                // localStorage.setItem('accessToken', action.payload)
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(authAction.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.isLoading = true;
            })
            .addCase(hydrateAction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(hydrateAction.fulfilled, (state, action) => {
                state.user = action.payload;
                console.log(state.user, 'hyd from slice')
                // localStorage.setItem('accessToken', action.payload)
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(hydrateAction.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
})
// export const {}
export default authSlice.reducer