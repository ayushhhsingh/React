import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();

  const lougoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button
      className="inline-block px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out transform bg-transparent 
      text-[#F5F5DC] dark:text-[#F5F5DC]
      hover:bg-[#C04000] hover:text-[#261C15]
      hover:scale-105 hover:-translate-y-1"
      onClick={lougoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
