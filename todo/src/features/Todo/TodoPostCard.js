import React, { useState, useEffect } from "react";
import T from "../../assets/delete.svg";
import { useSelector } from "react-redux";
import edit from "../../assets/edit.svg";
import { selectCurrentUser } from "../auth/authslice";
import { selectTodoById } from "./todoSlice";
import FollowUserButton from "../Users/FollowUserButton";
import Enlist from "../Users/Enlist";
const TodoPostCard = ({ id, todo }) => {
  const authUserId = useSelector(selectCurrentUser);

  // const todo = useSelector((state) => selectTodoById(state, id));

  console.log(todo);
  const [imageUrl, setImageUrl] = useState(null);
  // converting images from buffer to url for valid images
  useEffect(() => {
    if (
      todo &&
      todo.files &&
      todo.files[0] &&
      todo.files[0].data &&
      todo.files[0].data.data
    ) {
      const arrayBuffer = new Uint8Array(todo.files[0].data.data);
      const blob = new Blob([arrayBuffer], {
        type: todo.files[0].contentType,
      });
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageUrl(event.target.result);
      };
      reader.readAsDataURL(blob);
    }
    // console.log("imageUrl:  ", imageUrl);
  }, [todo]);
  if (!todo) {
    return null; // Handle the case when the todo is not found
  } else {
    const dateString = todo.date;
    const date = new Date(dateString);

    const options = {
      month: "short", // Abbreviated month name
      day: "numeric", // Day of the month (numeric)
      hour: "numeric", // Hour (numeric)
      minute: "numeric", // Minute (numeric)
    };

    const formattedDate = date.toLocaleString("en-US", options);

    return (
      <div key={id} className="rounded-xl bg-post border max-w-md ">
        <div className="flex items-center px-4 py-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://picsum.photos/id/1027/150/150"
          />
          <div className="ml-3 flex flex-col space-y-[2px] ">
            <div className=" flex flex-row space-x-[100px]">
              <span className="text-sm font-semibold antialiased block leading-tight text-white ">
                {todo.user}
              </span>

              <div className="">
                {todo.user !== authUserId && (
                  <FollowUserButton
                    userID={todo.user}
                    authUserId={authUserId}
                  />
                )}
              </div>
            </div>

            <span className=" text-xs block text-white">{formattedDate}</span>
          </div>
        </div>
        <div className=" text-xl text-white font-semibold ">
          {todo.description}
        </div>
        <img src={imageUrl} alt="file" />
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
        </div>
        <Enlist />
      </div>
    );
  }
};

export default TodoPostCard;
