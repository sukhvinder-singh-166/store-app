import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./components/LogOut";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/updatePass">Update Password</Link>
      <LogOut />
    </>
  );
};

export default Home;
