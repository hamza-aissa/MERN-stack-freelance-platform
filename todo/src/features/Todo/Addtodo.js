import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddNewTodoMutation } from "./todoSlice";
import { store } from "../../app/store";
const Addtodo = () => {
  const dispatch = useDispatch();
  const [addNewTodo, { isLoading }] = useAddNewTodoMutation();
  const [Body, setbody] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handlebody = (e) => {
    setbody(e.target.value);
  };
  const handlecancel = (e) => {
    setbody("");
  };
  const submit = async () => {
    console.log("clicked");
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("description", Body);
      formData.append("date", new Date().toISOString());

      const result = await addNewTodo({
        body: formData,
      }).unwrap();
      console.log("addNewTodo result:", result);
      setbody("");
      setFile(null);
      console.log("addtodo success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // dispatch add todo

    <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
      New Post
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <textarea
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          spellcheck="true"
          placeholder="Describe everything about this post here"
          onChange={handlebody}
        ></textarea>

        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
          <div>
            <input type="file" name="file" onChange={handleFileChange} />
          </div>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            0/300
          </div>
        </div>
        <div className="buttons flex">
          <div
            className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
            onClick={handlecancel}
          >
            Cancel
          </div>
          <div
            className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
            onClick={submit}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtodo;
