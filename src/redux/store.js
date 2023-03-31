import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cart from "./cart";

const appReducer = combineReducers({ cart });

export const store = configureStore({
  reducer: appReducer,
});
