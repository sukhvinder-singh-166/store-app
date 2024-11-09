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
      <h1>Sign Up</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={SIGNUP}>Sign Up</button>
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};

export default SignUp;
