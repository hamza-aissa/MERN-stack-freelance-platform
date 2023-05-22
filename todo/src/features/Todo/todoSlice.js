import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { todoApi } from "../api/apiSlice";
export const todoAdapter = createEntityAdapter({
  selectId: (todo) => todo._id,
  sortComparer: (a, b) => a.date.localeCompare(b.date),
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
        console.log("get todo querry test in todo slice :");
        console.log("response:  ", response);
        const loadedTodos = response;
        console.log("loadedtodos:  ", loadedTodos);

        const newState = todoAdapter.setAll(initialState, loadedTodos);
        console.log("newstate:  ", newState);

        return newState;
      },
    }),
    addNewTodo: builder.mutation({
      query: (description) => ({
        url: "/todos",
        method: "POST",
        body: {
          description,
          date: new Date().toISOString(),
        },
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});
export const { useGetTodosQuery, useAddNewTodoMutation } = extendedApislice;
export const selectTodoResult = extendedApislice.endpoints.getTodos.select();
const selectTodoData = createSelector(
  selectTodoResult,
  (todoResult) => todoResult.data
);
export const {
  selectAll: selectAllTodos,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
} = todoAdapter.getSelectors((state) => selectTodoData(state) ?? initialState);
