import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="text-white bg-login h-[100vh] py-[20px] px-[8%]">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="w-[100%] max-w-[450px] rounded-[4px] p-[45px] m-auto bg-low-opacity">
        <h1 className="text-[26px] font-[500] mb-[22px]">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your Name"
              className="w-[100%] h-[44px] text-white my-3 border-none outline-none rounded-[4px] bg-[#333] px-5 py-4 text-[14px] font-medium placeholder:text-[14px] placeholder:font-[500]"
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-[100%] h-[44px] text-white my-3 border-none outline-none rounded-[4px] bg-[#333] px-5 py-4 text-[14px] font-medium placeholder:text-[14px] placeholder:font-[500]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] h-[44px] text-white my-3 border-none outline-none rounded-[4px] bg-[#333] px-5 py-4 text-[14px] font-medium placeholder:text-[14px] placeholder:font-[500]"
          />
          <button className="bg-red-600 w-full py-2.5 px-5 my-3 rounded-[4px]">
            Sign Up
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="flex items-center gap-[5px]">
              <input type="checkbox" className="w-[18px] h-[18px]" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div>
          {signState === "Sign In" && (
            <p className="mt-10 text-[#737373]">
              New to Netflix?{" "}
              <span
                className="ml-1.5 text-[#fff] font-[500] cursor-pointer"
                onClick={() => setSignState("Sign Up")}
              >
                Sign Up Now
              </span>
            </p>
          )}

          {signState === "Sign Up" && (
            <p className="mt-10 text-[#737373]">
              Already have account?{" "}
              <span
                className="ml-1.5 text-[#fff] font-[500] cursor-pointer"
                onClick={() => setSignState("Sign In")}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
