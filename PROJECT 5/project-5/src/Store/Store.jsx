import { configureStore } from "@reduxjs/toolkit";
import  api  from "../Features/ApiSlice";

export const store = configureStore({
    reducer: {
        ApiKey : api
    }
})