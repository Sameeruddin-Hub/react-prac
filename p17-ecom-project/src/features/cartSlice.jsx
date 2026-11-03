import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            const isAddedAlready = state.cartItems.some((item) => item.id === action.payload.id)
            if (!isAddedAlready) {
                state.cartItems.push({ ...action.payload, quantity: 1, isAdded: true })
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer