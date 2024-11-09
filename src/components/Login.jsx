import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const LOGIN = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Login successful") {
          localStorage.setItem("email", res.data.user.email);
          navigate("/home");
        }
      });
  };
  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button onClick={LOGIN}>Login</button>
      </form>
    </>
  );
};

export default Login;
