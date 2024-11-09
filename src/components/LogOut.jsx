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
      <button onClick={LOGOUT}>log out</button>
    </>
  );
};

export default LogOut;
