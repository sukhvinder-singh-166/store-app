import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./components/LogOut";

const Home = () => {
  return (
    <>
      <div className=" bg-black items-center h-screen">
        <nav className="flex justify-between max-w-7xl mx-auto py-3 items-center gap-5 w-full border-b-2 border-white">
          <div className="flex justify-between w-full items-center gap-5">
            <h1 className="text-4xl font-bold mb-5 text-white">Home Page</h1>
            <Link to="/updatePass" className="text-white">
              Update Password
            </Link>
          </div>
          <LogOut />
        </nav>
      </div>
    </>
  );
};

export default Home;
