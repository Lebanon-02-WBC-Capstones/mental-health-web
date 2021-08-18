import React from "react";
import Navbar from "../components/NavigationBar";
import { Link } from "react-router-dom";
import signinbg from "../signin-bg.png";

function SignIn() {
  return (
    <>
      <Navbar mode="visitor" />
      <div>
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
          <div className="bg-white w-4/6 align-middle rounded shadow-2x1 flex">
            <div className="flex-col w-1/2 p-7">
              <div className="flex space-x-2 justify-end text-sm mb-5">
                <button className="text-green-700 font-bold">Login</button>
                <Link to="/sign-up">
                  <button className="text-gray-500 font">Sign up</button>
                </Link>
              </div>
              <h3 className="text-2xl font-bold mb-4">SIGN IN</h3>
              <h5 className="text-gray-400 font-light text-s mb-9">
                Sign in to enjoy more benefits
              </h5>
              <form className="space-y-3">
                <div>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="password"
                    placeholder="Password"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <button className="block w-full bg-green-700 p-2 rounded-lg text-white hover:bg-green-600 transition duration-200 shadow-md">
                  Sign In
                </button>
              </form>
            </div>
            <div
              className="w-1/2 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${signinbg})`,
                backgroundColor: "#FDECD8",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
