import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import cartSlice from '../features/cart/cartSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice
    }
})