import React from "react";
import { selectTodoById, selectAllTodos, useGetTodosQuery } from "./todoSlice";
import { selectCurrentUser } from "../auth/authslice";
import TodoPostCard from "./TodoPostCard";

import { useSelector } from "react-redux";
const ProfileTodoList = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetTodosQuery();
  console.log(data);
  if (isLoading) {
    return <p className="text-white">Loading...</p>;
  }

  if (isError) {
    return <p className="text-white">Error loading todos</p>;
  }

  if (data) {
    return (
      <div>
        {Object.values(data.entities).map((todo) => (
          //
          <TodoPostCard id={todo._id} todo={todo} />
        ))}
      </div>
    );
  }

  return null;
};
export default ProfileTodoList;
