import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
        ,
        reset: (state) => {
            state.count = 0
        },
        incrementByten: (state, action) => {
            state.count += action.payload
        }
    }
})
// here apan apna store create kar rahe hain with the help of redux template , appne requirement bhejrahe hain redux key function mein aur vo state actions banake deega 

export const { increment, decrement, reset, incrementByten } = counterSlice.actions;

// yahann fir se actions ko export kar rahe hain

export default counterSlice.reducer;
// yahan reducers ko bhi export karrahe hain