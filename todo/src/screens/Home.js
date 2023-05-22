import React from "react";
import Addtodo from "../features/Todo/Addtodo";
import Todolist from "../features/Todo/Todolist";
const Home = () => {
  return (
    <div className="flex justify-center">
      <div className=" flex flex-col">
        <Addtodo />
        <Todolist />
      </div>
    </div>
  );
};

export default Home;
