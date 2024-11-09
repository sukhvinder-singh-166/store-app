import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import UpdatePass from "./components/UpdatePass";
import Login from "./components/Login";
import CartItems from "./components/common/CartItems";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/updatePass" element={<UpdatePass />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </>
  );
}

export default App;
