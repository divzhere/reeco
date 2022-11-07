"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateStatus = exports.updateProduct = exports.addProduct = exports.productSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _util = require("../util");

var productSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: {
    value: _util.PRODUCTS_INVENTORY_JSON
  },
  reducers: {
    addProduct: function addProduct(state, action) {
      state.value.push(action.payload);
    },
    updateProduct: function updateProduct(state, action) {
      console.log(action.payload);
      state.value.map(function (product) {
        if (product.id === action.payload.id) {
          product.price = action.payload.price;
          product.quantity = action.payload.quantity;
          product.total = action.payload.total;
        }
      });
    },
    updateStatus: function updateStatus(state, action) {
      state.value.map(function (product) {
        if (product.id === action.payload.id) {
          product.status = action.payload.status;
        }
      });
    }
  }
});
exports.productSlice = productSlice;
var _productSlice$actions = productSlice.actions,
    addProduct = _productSlice$actions.addProduct,
    updateProduct = _productSlice$actions.updateProduct,
    updateStatus = _productSlice$actions.updateStatus;
exports.updateStatus = updateStatus;
exports.updateProduct = updateProduct;
exports.addProduct = addProduct;
var _default = productSlice.reducer;
exports["default"] = _default;