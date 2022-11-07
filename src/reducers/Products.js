import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_INVENTORY_JSON } from "../util";

export const productSlice = createSlice({
  name: "users",
  initialState: { value: PRODUCTS_INVENTORY_JSON },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },

    updateProduct: (state, action) => {

    console.log(action.payload)
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          product.price = action.payload.price;
          product.quantity = action.payload.quantity;
          product.total = action.payload.total;
        }
      });
    },

    updateStatus: (state, action) => {
      state.value.map((product) => {
        if (product.id === action.payload.id) {
          product.status = action.payload.status;
        }
      });
    },
  },
});

export const { addProduct, updateProduct, updateStatus } = productSlice.actions;
export default productSlice.reducer;
