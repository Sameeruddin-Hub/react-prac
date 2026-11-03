import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})


// 1. COnfigure the store for all the states