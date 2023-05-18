import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";
const initialState = {
  token: null,
  isAuthenticated: null,
  userId: null,
  username: null,
  status: null,
  error: null,
};

// Async thunk for user login
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    console.log(credentials);
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
  {
    // extract the needed data from credentials and pass it along as the payload
    prepare: (credentials) => ({ payload: credentials }),
  }
);

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
    // No need for login and signup reducers since the state is being updated in the async thunks
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.token = action.payload.token;
        state.userId = action.payload.username;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "error";
        state.isAuthenticated = false;
        state.error = action.payload ? action.payload.message : "Login failed";
        // state.error = action.error.message;
      })

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

export default authSlice.reducer;
