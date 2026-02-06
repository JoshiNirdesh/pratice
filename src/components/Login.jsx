import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("login");
  const {showUserLogin,setShowUserLogin}=useContext(AppContext)
  return (
    <div onClick={()=>setShowUserLogin(false)} className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
      <form
      onClick={(e)=>e.stopPropagation()}
        action=""
        className="bg-white w-80 shadow-xl border border-gray-300 rounded-lg p-6"
      >
        <h2 className="text-2xl text-center text-lg font-medium text-green-500 mt-5">
          {state === "login" ? "Login" : "Register"} Form
        </h2>
        <div className="mt-5">
          {state === "register" && (
            <div className="flex flex-col">
              <label htmlFor="" className="text-gray-400 ">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded px-2 mt-1 "
                placeholder="Enter your email"
              />
            </div>
          )}
          <div className="flex flex-col">
            <label htmlFor="" className="text-gray-400 ">
              Username
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded px-2 mt-1 "
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="" className="text-gray-400">
              Password
            </label>
            <input
              type="password"
              className="border border-gray-300 rounded px-2 mt-1"
              placeholder="Enter your password"
            />
          </div>
          <p className="text-sm mt-2">
            Create an account{" "}
            <span
              className="text-green-500 cursor-pointer"
              onClick={() => setState("register")}
            >
                {state === "login"?"Register":"Login"}
            </span>{" "}
          </p>
          <button className="bg-green-500 px-4 py-2 rounded-xl w-full mt-3 text-white fond-medium">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
