// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const todoApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
//   tagTypes: ["Post"],
//   endpoints: (builder) => ({}),
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  prepareHeaders: (headers, { getState }) => {
    // Get the authentication token from the Redux store
    const token = getState().auth.token;

    // If we have a token, add it to the request headers
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const todoApi = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Post"],
  endpoints: (builder) => ({}),
});
