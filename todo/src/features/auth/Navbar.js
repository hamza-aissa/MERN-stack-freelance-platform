import React from "react";
import AuthenticatedNavbar from "./AuthenticatedNavbar";
import NonAuthenticatedNavbar from "./NonAuthenticatedNavbar.js";
import { useSelector } from "react-redux";

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.auth.userId);
  return (
    <div>
      {token ? (
        <AuthenticatedNavbar username={username} />
      ) : (
        <NonAuthenticatedNavbar />
      )}
    </div>
  );
};

export default Navbar;
