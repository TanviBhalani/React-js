// import { createSlice } from "@reduxjs/toolkit";

// export const wishlist = createSlice({
//   name: "wishlist",
//   initialState: { items: [] },

//   reducers: {
//     addToWishlist: (state, action) => {
//       state.items.push(action.payload);
//     },

//     removeFromWishlist: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload
//       );
//     }
//   }
// });

// export const { addToWishlist, removeFromWishlist } = wishlist.actions;
// export default wishlist.reducer;


import { createSlice } from "@reduxjs/toolkit";

export const wishlist = createSlice({
  name: "wishlist",
  initialState: { items: [] },

  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    }
  }
});

export const { addToWishlist } = wishlist.actions;
export default wishlist.reducer;
