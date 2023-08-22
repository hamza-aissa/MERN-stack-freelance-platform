import React from "react";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import { logOut } from "./authslice";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";
const AuthenticatedNavbar = ({ username }) => {
  const dispatch = useDispatch();
  return (
    <div className="shadow bg-black">
      <div className="h-16 mx-auto px-5 flex items-center justify-between">
        <Link to="/" className="text-2xl text-white cursor-pointer">
          todo-social
        </Link>

        <ul className="flex justify-between gap-2">
          <li>
            <Link to="/explore" className="text-white">
              Browse Tasks
            </Link>
          </li>
          <li>
            <Link to="/" className="text-white" onClick={dispatch(logOut)}>
              Log Out
            </Link>
          </li>
        </ul>
        <SearchBar />
        <div className="flex flex-row space-x-2">
          <p className="text-white">{username}</p>
          <Link to="/profile">
            <img className="bg-white rounded-full" src={user} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedNavbar;
