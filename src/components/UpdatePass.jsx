import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UpdatePass = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    } else {
      navigate("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const UPDATEPASS = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/forgetPass", {
        email,
        oldPass,
        newPass,
      })
      .then((res) => {
        console.log(res);
        setOldPass("");
        setNewPass("");
        navigate("/home");
      });
  };
  return (
    <div>
      <h1>Update Password</h1>
      <form>
        <input
          type="password"
          value={oldPass}
          onChange={(e) => setOldPass(e.target.value)}
          placeholder="Old Password"
        />
        <input
          type="password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          placeholder="New Password"
        />
        <button onClick={UPDATEPASS}>Update</button>
      </form>
    </div>
  );
};

export default UpdatePass;
