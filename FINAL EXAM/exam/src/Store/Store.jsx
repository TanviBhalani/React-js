import { configureStore } from "@reduxjs/toolkit";
import  crud  from "../Features/CrudSlice";

export const store = configureStore({
    reducer : {
        CrudKey : crud
    }
})