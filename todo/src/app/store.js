import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "../features/auth/authslice";
import { todoApi } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware, thunk),
});
