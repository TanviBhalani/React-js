import {configureStore} from "@reduxjs/toolkit"
import  Counter  from "../features/CounterSlice"
import  todo  from "../features/ToDoSlice"
import  api  from "../features/AddSlice"

export const store = configureStore({
    reducer:{
      CounterKey  : Counter,
      TodoKey : todo,
      ApiKey : api
    }
})  




// import { configureStore } from "@reduxjs/toolkit";
// import apiReducer from "../features/AddSlice";

// export const store = configureStore({
//   reducer: {
//     ApiKey: apiReducer,
//   },
// });
