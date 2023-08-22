import React from "react";
import Addtodo from "../features/Todo/Addtodo";
import Feed from "../features/Todo/Feed";
import Todolist from "../features/Todo/Todolist";
const Home = () => {
  return (
    <div className="flex justify-center">
      <div className=" flex flex-col">
        <Addtodo />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
