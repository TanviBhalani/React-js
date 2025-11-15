import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api", async()=>{
    let response = await axios.get("https://fakestoreapi.com/products")
    return response.data
})

export const api = createSlice({
    name: "api",
    initialState : {record : [], loading : true},
    extraReducers : (builder => {
        builder.addCase(fetchData.pending,(state,action)=>{
            state.record = []
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.record = action.payload
            state.loading = false
        })
    })
})

export default api.reducer





// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "https://fakestoreapi.com/products";

// // ========== GET ==========
// export const fetchData = createAsyncThunk("api/fetchData", async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// // ========== POST ==========
// export const addData = createAsyncThunk("api/addData", async (newItem) => {
//   const response = await axios.post(API_URL, newItem);
//   return response.data;
// });

// // ========== PUT ==========
// export const updateData = createAsyncThunk("api/updateData", async (updatedItem) => {
//   const response = await axios.put(`${API_URL}/${updatedItem.id}`, updatedItem);
//   return response.data;
// });

// // ========== DELETE ==========
// export const deleteData = createAsyncThunk("api/deleteData", async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id; // return only id to filter out
// });

// // ========== SLICE ==========
// export const api = createSlice({
//   name: "api",
//   initialState: { record: [], loading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // ====== FETCH ======
//       .addCase(fetchData.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.record = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       })

//       // ====== ADD ======
//       .addCase(addData.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(addData.fulfilled, (state, action) => {
//         state.record.push(action.payload);
//         state.loading = false;
//       })
//       .addCase(addData.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       })

//       // ====== UPDATE ======
//       .addCase(updateData.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(updateData.fulfilled, (state, action) => {
//         const index = state.record.findIndex((item) => item.id === action.payload.id);
//         if (index !== -1) {
//           state.record[index] = action.payload;
//         }
//         state.loading = false;
//       })
//       .addCase(updateData.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       })

//       // ====== DELETE ======
//       .addCase(deleteData.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(deleteData.fulfilled, (state, action) => {
//         state.record = state.record.filter((item) => item.id !== action.payload);
//         state.loading = false;
//       })
//       .addCase(deleteData.rejected, (state, action) => {
//         state.error = action.error.message;
//         state.loading = false;
//       });
//   },
// });

// export default api.reducer;
