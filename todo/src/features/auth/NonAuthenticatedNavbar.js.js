import React from "react";
import { Link } from "react-router-dom";

const NonAuthenticatedNavbar = () => {
  return (
    <div className="shadow bg-gradient">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl text-black cursor-pointer">
          todo-social
        </Link>

        <ul className="flex justify-between gap-2">
          <li>
            <Link
              to="/register"
              className="h-[20px] w-[30px] bg-g rounded-[30px] px-4 py-2"
            >
              Signup
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="h-[20px] w-[30px] bg-g rounded-[30px] px-4 py-2"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NonAuthenticatedNavbar;
