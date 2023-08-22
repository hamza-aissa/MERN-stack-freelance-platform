import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./features/auth/Signup";
import Login from "./features/auth/Login";
import Navbar from "./features/auth/Navbar";
import Home from "./screens/Home";
import LandingPage from "./screens/LandingPage";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "./screens/Profile";
import Explore from "./screens/Explore";
import OwnProfile from "./screens/OwnProfile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/Home" />
          <Route element={<OwnProfile />} path="/profile" />
          <Route element={<Profile />} path="/profile/:user" />
          <Route element={<Explore />} path="/explore" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
