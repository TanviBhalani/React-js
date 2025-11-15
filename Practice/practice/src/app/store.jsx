import {configureStore} from "@reduxjs/toolkit"
import  Counter  from "../features/CounterSlice"
import  todo  from "../features/TodoSlice"

export const store = configureStore({
    reducer: {
        CounterKey : Counter,
        TodoKey : todo,
    }
})