import { configureStore } from "@reduxjs/toolkit";
import wishlist from "../1Feature/WishlistSlice";

export const store = configureStore({
  reducer: {
    Wishlistkey: wishlist
  }
});
