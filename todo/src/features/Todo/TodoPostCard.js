import React, { useState } from "react";
import T from "../../assets/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import edit from "../../assets/edit.svg";
import { selectTodoById } from "./todoSlice";

const TodoPostCard = ({ id, todoId }) => {
  const todo = useSelector((state) => selectTodoById(state, id));
  console.log(todo);
  if (!todo) {
    return null; // Handle the case when the todo is not found
  } else {
    return (
      <div key={id} className="rounded-xl bg-post border max-w-md ">
        <div className="flex items-center px-4 py-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://picsum.photos/id/1027/150/150"
          />
          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">
              {todo.date}
            </span>
            <span className="text-gray-600 text-xs block">{todo.user}</span>
          </div>
        </div>
        <img src="https://picsum.photos/id/244/900/900" />
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-2">
            <input
              className="bg-button text-white font-semibold grow "
              type="button"
              value=""
            />
            <input
              className="bg-button text-white font-semibold grow "
              type="button"
              value=""
            />
            <input
              className="bg-button text-white font-semibold grow "
              type="button"
              value=""
            />
          </div>
          <div className="flex">
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
            </svg>
          </div>
        </div>
        <div className="font-semibold text-grey text-sm mx-4 mt-2 mb-4">
          92,372 likes
        </div>
      </div>
    );
  }
};

export default TodoPostCard;
