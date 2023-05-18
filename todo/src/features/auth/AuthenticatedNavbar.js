import React from "react";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
const AuthenticatedNavbar = ({ username }) => {
  return (
    <div className="shadow bg-gradient">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl text-black cursor-pointer">
          todo-social
        </Link>

        <ul className="flex justify-between gap-2">
          <li>
            <Link to="" className="">
              some link
            </Link>
          </li>
          <li>
            <Link to="" className="">
              Log Out
            </Link>
          </li>
        </ul>
        <div className="flex flex-row space-x-2">
          <p>{username}</p>
          <img src={user} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedNavbar;
