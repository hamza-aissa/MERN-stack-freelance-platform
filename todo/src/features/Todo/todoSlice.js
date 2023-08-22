import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { todoApi } from "../api/apiSlice";
export const todoAdapter = createEntityAdapter({
  selectId: (todo) => todo._id,
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});
const initialState = todoAdapter.getInitialState();
export const extendedApislice = todoApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todos"],
      keepUnusedDataFor: 5,
      transformResponse: (response) => {
        // Use todoAdapter.setAll to set the initial state of the todos

        const loadedTodos = response;
        // console.log("loadedtodos:  ", loadedTodos);

        const newState = todoAdapter.setAll(initialState, loadedTodos);
        // console.log("newstate:  ", newState);

        return newState;
      },
    }),
    getTodosForUser: builder.query({
      query: (userId) => `/todos/user/${userId}`,
      providesTags: ["Todos"],
      keepUnusedDataFor: 5,
      transformResponse: (response) => {
        // Use todoAdapter.setAll to set the initial state of the todos
        console.log("get todos query response   " + response);
        const loadedTodos = response;
        console.log("get todos query loadedtodos:  ", loadedTodos);

        const newState = todoAdapter.setAll(initialState, loadedTodos);
        console.log("get todos query newstate:  ", newState);

        return newState;
      },
    }),
    getFeed: builder.query({
      query: () => "/feed",
      providesTags: ["Todos"],
      keepUnusedDataFor: 5,
      transformResponse: (response) => {
        // Use todoAdapter.setAll to set the initial state of the todos

        const loadedTodos = response;
        // console.log("loadedtodos:  ", loadedTodos);

        const newState = todoAdapter.setAll(initialState, loadedTodos);
        // console.log("newstate:  ", newState);

        return newState;
      },
    }),
    addNewTodo: builder.mutation({
      query: ({ body }) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Todos"],
    }),
    getSearchedTodos: builder.query({
      query: (searchTerm) => `/Todos/${searchTerm}`,
      providesTags: ["Todos"],
      keepUnusedDataFor: 5,
      transformResponse: (response) => {
        const loadedTodos = response;
        console.log("Todos search result:  ", loadedTodos);
        const newState = todoAdapter.setAll(initialState, loadedTodos);
        console.log("search result newState:  ", newState);

        return newState;
      },
    }),
  }),
});
export const {
  useGetTodosQuery,
  useGetTodosForUserQuery,
  useAddNewTodoMutation,
  useGetFeedQuery,
  useGetSearchedTodosQuery,
} = extendedApislice;
// export const selectTodoResult = extendedApislice.endpoints.getTodos.select();
export const selectTodoResult =
  extendedApislice.endpoints.getTodosForUser.select();
const selectTodoData = createSelector(
  selectTodoResult,
  (todoResult) => todoResult.data
);
export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
} = todoAdapter.getSelectors((state) => selectTodoData(state) ?? initialState);
