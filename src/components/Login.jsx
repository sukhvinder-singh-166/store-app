import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const LOGIN = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("https://store-backend-oisp.onrender.com/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Login successful") {
          alert("Login successful");
          localStorage.setItem("email", res.data.user.email);
          navigate("/home");
        } else {
          alert("Invalid email or password");
        }
      });
  };
  return (
    <>
      <div className="flex justify-center flex-col bg-black items-center h-screen">
        <h1 className="text-4xl font-bold mb-5 text-white">Login</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            className="px-3 py-2 rounded-md text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <input
            type="password"
            className="px-3 py-2 rounded-md text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button
            onClick={LOGIN}
            className="px-3 py-2 rounded-md text-white bg-blue-500 whitespace-nowrap"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-white mt-5 gap-3 flex items-center">
          Don't have an account?
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
