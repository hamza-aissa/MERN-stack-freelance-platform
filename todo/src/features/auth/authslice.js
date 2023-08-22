import { createSlice } from "@reduxjs/toolkit";
import { authApiSlice } from "./authapiSlice";

const initialState = {
  token: null,
  isAuthenticated: null,
  userId: null,
  status: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { email, accessToken } = action.payload;
      state.userId = email;
      state.token = accessToken;
      state.isAuthenticated = true;
    },
    logOut: (state, action) => {
      state.token = null;
      state.isAuthenticated = null;
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApiSlice.endpoints.signup.matchFulfilled,
        (state, action) => {
          state.status = "idle";
          state.token = action.payload.token;
          state.userId = action.payload.userId;
          state.error = null;
        }
      )
      .addMatcher(
        authApiSlice.endpoints.signup.matchRejected,
        (state, action) => {
          state.status = "error";
          state.error = action.payload
            ? action.payload.message
            : "Signup failed";
        }
      );
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.userId;
export const selectCurrentToken = (state) => state.auth.token;
