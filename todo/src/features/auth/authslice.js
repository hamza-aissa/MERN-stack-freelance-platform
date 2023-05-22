import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";
const initialState = {
  token: null,
  isAuthenticated: null,
  userId: null,
  status: null,
  error: null,
};

// Async thunk for user signup
export const signupAsync = createAsyncThunk("auth/signup", async (userData) => {
  console.log(userData);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": " POST",
      },
    };
    const response = await axios.post(
      `${API_BASE_URL}/register`,
      userData,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

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

      // SIGNUP
      .addCase(signupAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload.token;
        state.userId = action.payload.userId;
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload ? action.payload.message : "Signup failed";
      });
  },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.userId;
export const selectCurrentToken = (state) => state.auth.token;
