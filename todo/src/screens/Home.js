import React from "react";
import Addtodo from "../features/Todo/Addtodo";
import Todolist from "../features/Todo/Todolist";
const Home = () => {
  return (
    <div>
      <Addtodo />
      <Todolist />
    </div>
  );
};

export default Home;
