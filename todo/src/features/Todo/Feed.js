import React from "react";
import { selectAllTodos, useGetFeedQuery } from "./todoSlice";
import TodoPostCard from "./TodoPostCard";
import { useSelector } from "react-redux";
const Feed = () => {
  const { isLoading, isSuccess, isError, error } = useGetFeedQuery();

  const orderedTodoIds = useSelector(selectAllTodos);
  console.log(orderedTodoIds);

  let List;
  if (isLoading) {
    List = <p>Loading...</p>;
  } else if (isSuccess) {
    List = orderedTodoIds.map((todo) => (
      <TodoPostCard id={todo._id} todoId={todo._id} />
    ));
  } else if (isError) {
    List = <p>{error?.message}</p>;
  } else {
    List = "TODO IS EMPTY NOW";
  }

  return (
    // map over todos
    <div className="flex flex-col space-y-5">{List}</div>
  );
};

export default Feed;
