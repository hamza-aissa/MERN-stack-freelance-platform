import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAddNewTodoMutation } from "./todoSlice";
import { store } from "../../app/store";
const Addtodo = () => {
  const dispatch = useDispatch();
  const [addNewTodo, { isLoading }] = useAddNewTodoMutation();
  const [Body, setbody] = useState("");
  const submit = async () => {
    console.log("clicked");
    try {
      console.log("addNewTodo result (before unwrap):", addNewTodo(Body));
      const result = await addNewTodo(Body).unwrap();
      console.log("addNewTodo result (after unwrap):", result);
      setbody("");
      console.log("addtodo success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    // dispatch add todo
    <div className="flex flex-row">
      <input
        type="text"
        className="rounded-[70px] border-black bg-g"
        placeholder="enter a todo"
        onChange={(e) => setbody(e.target.value)}
      />
      <input
        type="button"
        value="Add"
        className="bg-primary rounded-[10px] px-[30px] ml-10"
        onClick={submit}
      />
    </div>
  );
};

export default Addtodo;
