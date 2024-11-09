import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SIGNUP = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      alert("Please fill all the fields");
      return;
    }
    await axios
      .post("http://localhost:3000/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.user.email);
        navigate("/login");
        setUsername("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error during signup:", error.message);
      });
  };
  return (
    <>
      <div className="flex justify-center flex-col bg-black items-center h-screen">
        <h1 className="text-4xl font-bold mb-5 text-white">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            className="px-3 py-2 rounded-md text-black"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="px-3 py-2 rounded-md text-black"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="px-3 py-2 rounded-md text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={SIGNUP}
            className="px-3 py-2 rounded-md text-white bg-blue-500"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-white mt-5 gap-3 flex items-center">
          Already have an account?
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
