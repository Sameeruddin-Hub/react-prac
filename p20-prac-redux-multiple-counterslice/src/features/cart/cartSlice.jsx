import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: []
}
const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            state.items.push(action.payload)
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }

    }
})

export const { addTocart, deleteItem } = createSlice.actions
export default cartSlice.reducer

