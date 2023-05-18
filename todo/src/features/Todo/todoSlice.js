import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { todoApi } from "../api/apiSlice";

// creating entity adapter then sorting the data stored by date
export const todoAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});
// creating todos state then selecting it
// export const todoSelector = todoAdapter.getSelectors((state) => state.todos);

const initialState = todoAdapter.getInitialState();
export const extendedApislice = todoApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      transformResponse: (responseData) => {
        const loadedTodos = responseData.map((todo) => {
          if (!todo?.reactions)
            todo.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            };
          return todo;
        });
        return todoAdapter.setAll(initialState, loadedTodos);
      },
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    addNewTodo: builder.mutation({
      query: (initialTodo) => ({
        url: "/todos",
        method: "POST",
        body: {
          ...initialTodo,
          // userId: Number(initialTodo.userId),
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      }),
      invalidatesTags: [{ type: "Todo", id: "LIST" }],
    }),
    // new endpoint
  }),
});

export const { useGetTodosQuery, useAddNewTodoMutation } = extendedApislice;
// returns the query result object
export const selectTodoResult = extendedApislice.endpoints.getTodos.select();
//  Creates memorized selector
const selectTodoData = createSelector(
  selectTodoResult,
  (todoResult) => todoResult.data
); // normalized state object with ids & entities
//getselectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllTodo,
  selectById: selectTodoById,
  selectIds: selectTodoIds,
  // Pass in a selector that returns the Todo slice of state
} = todoAdapter.getSelectors((state) => selectTodoData(state) ?? initialState);
