import React from "react";
import { Link } from "react-router-dom";
import LogOut from "./components/LogOut";
import Products from "./components/Products";
import { Cart } from "./components/common/Icons";
const Home = () => {
  return (
    <>
      <div className=" bg-black items-center h-screen">
        <nav className="flex justify-between max-w-7xl mx-auto px-3 py-3 items-center gap-5 w-full border-b-2 border-white">
          <div className="flex justify-between w-full items-center lg:gap-5">
            <h1 className="text-2xl md:text-4xl font-bold lg:mb-5 text-white">
              Home Page
            </h1>

            <Link to="/updatePass" className="text-white">
              Update Password
            </Link>
          </div>
          <Link to="/cart" className="text-white">
            <Cart />
          </Link>
          <LogOut />
        </nav>
        <Products />
      </div>
    </>
  );
};

export default Home;
