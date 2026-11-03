import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        // counter anedi maman slice lo ichina key
        //counterreducer anedi aa state ni manage chese reducer
    }
})