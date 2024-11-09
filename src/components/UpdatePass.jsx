import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const UpdatePass = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    } else {
      navigate("/login");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const UPDATEPASS = (e) => {
    e.preventDefault();
    if (oldPass === "" || newPass === "") {
      alert("Please fill all the fields");
      return;
    }
    axios
      .post("https://store-backend-oisp.onrender.com/forgetPass", {
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
    <div className="flex justify-center flex-col bg-black items-center h-screen">
      <h1 className="text-4xl font-bold mb-5 text-white">Update Password</h1>
      <form className="flex flex-col gap-4">
        <input
          type="password"
          value={oldPass}
          className="px-3 py-2 rounded-md text-black"
          onChange={(e) => setOldPass(e.target.value)}
          placeholder="Old Password"
        />
        <input
          type="password"
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          className="px-3 py-2 rounded-md text-black"
          placeholder="New Password"
        />
        <button
          className="px-3 py-2 rounded-md text-white bg-blue-500 whitespace-nowrap"
          onClick={UPDATEPASS}
        >
          Update
        </button>
        <Link to="/home" className="text-white">
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default UpdatePass;
