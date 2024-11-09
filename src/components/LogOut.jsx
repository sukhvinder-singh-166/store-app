import React from "react";
import { useNavigate } from "react-router-dom";
const LogOut = () => {
  const navigate = useNavigate();
  const LOGOUT = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <>
      <button
        onClick={LOGOUT}
        className="px-3 py-2 rounded-md text-white bg-blue-500 whitespace-nowrap"
      >
        log out
      </button>
    </>
  );
};

export default LogOut;
