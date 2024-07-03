import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import UserVerification from "./pages/user/UserVerification";

import User from "./pages/user/User";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLoginAction } from "./features/users/userAction";
import ForgetPassword from "./pages/user/ForgetPassword";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLoginAction());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify-user" element={<UserVerification />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="admin/new" element={<Register />} />

        <Route path="admin/profile" element={<Profile />} />

        <Route path="*" element={<h1>404 Page not found!</h1>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
