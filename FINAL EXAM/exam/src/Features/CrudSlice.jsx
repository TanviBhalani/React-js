import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("crud/fetchData" ,async () => {
    const response = await axios.get(`http://localhost:5000/tasks?uid=${uid}`)
    return response.data[0]
} ) 

export const addData = createAsyncThunk("crud/addData", async (newData) => {
  const response = await axios.post("http://localhost:5000/tasks", newData);
  return response.data;
});

export const updateData = createAsyncThunk("api/updateData", async ({ id, updatedData }) => {
    const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedData);
    return response.data;
});

export const deleteData = createAsyncThunk("api/deleteData", async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    return id;
})

export const crud = createSlice({
    name: "crud",
    initialState : {record : [] , loading : true},
    reducers : {},
    extraReducers :(builder) => {
        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.record = action.payload
            state.loading = false
        })


         builder.addCase(addData.fulfilled, (state, action) => {
      state.record.push(action.payload); 
    });


    builder.addCase(updateData.fulfilled,(state,action) => {
        let singleData = state.record.find((item) => item.id == action.payload )

        if(singleData){
            singleData.name = action.payload.name
            singleData.email = action.payload.email
            singleData.password = action.payload.password
        }
    })


    builder.addCase(deleteData.fulfilled,(state,action) => {
        state.record = state.record.filter((item) => item.id !== action.payload)
    })


    }
})

export default crud.reducer