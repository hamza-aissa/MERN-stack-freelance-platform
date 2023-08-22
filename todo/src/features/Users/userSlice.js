import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { todoApi } from "../api/apiSlice";
export const userAdapter = createEntityAdapter({
  selectId: (user) => user._id,
  sortComparer: (a, b) => a.date.localeCompare(b.date),
});
const initialState = userAdapter.getInitialState();
export const extendedApislice = todoApi.injectEndpoints({
  endpoints: (builder) => ({
    getusers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
      keepUnusedDataFor: 5,
      transformResponse: (response) => {
        // Use todoAdapter.setAll to set the initial state of the todos

        const loadedUsers = response;
        console.log("loadedtodos:  ", loadedUsers);

        const newState = userAdapter.setAll(initialState, loadedUsers);
        console.log("newstate:  ", newState);

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

        const newState = userAdapter.setAll(initialState, loadedTodos);
        // console.log("newstate:  ", newState);

        return newState;
      },
    }),
    followUser: builder.mutation({
      query: ({ TargetId }) => ({
        url: `/users/${TargetId}/follow`,
        method: "POST",
        body: { TargetId },
      }),
      invalidatesTags: ["User"],
    }),
    getFollowingStatus: builder.query({
      query: ({ userId, targetId }) => `/users/${userId}/following/${targetId}`,
    }),
    sendMessage: builder.mutation({
      query: ({ userId, message }) => ({
        url: `/users/${userId}/messages`,
        method: "POST",
        body: { message },
      }),
      invalidatesTags: ["Messages"],
    }),
    reactToTodo: builder.mutation({
      query: ({ todoId, reaction }) => ({
        url: `/todos/${todoId}/reactions`,
        method: "POST",
        body: { reaction },
      }),
      invalidatesTags: ["Todos"],
    }),
    enlist: builder.mutation({
      query: ({ userId, todoId }) => ({
        url: `/users/${userId}/todos/${todoId}/enlist`,
        method: "POST",
      }),
      invalidatesTags: ["Todos"],
    }),
    getSearchedUsers: builder.query({
      query: (searchTerm) => `/users/${searchTerm}`,
      providesTags: ["Users"],
      keepUnusedDataFor: 5,
      transformResponse: (response) => {
        const loadedUsers = response;
        console.log("loadedUsers search result:  ", loadedUsers);

        const newState = userAdapter.setAll(initialState, loadedUsers);
        console.log("search result newState:  ", newState);

        return newState;
      },
    }),
  }),
});
export const {
  useGetusersQuery,
  useFollowUserMutation,
  useGetFeedQuery,
  useEnlistMutation,
  useReactToTodoMutation,
  useSendMessageMutation,
  useGetSearchedUsersQuery,
  useGetFollowingStatusQuery,
} = extendedApislice;
export const selectTodoResult = extendedApislice.endpoints.getusers.select();
const selectUserData = createSelector(
  selectTodoResult,
  (UserResult) => UserResult.data
);
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds,
} = userAdapter.getSelectors((state) => selectUserData(state) ?? initialState);
