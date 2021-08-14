import React from "react";
import Navbar from "../components/NavigationBar";

function SignUp() {
  return (
    <>
      <Navbar mode="visitor" />
      <div>
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
          <div className="bg-white w-4/6 align-middle rounded shadow-2x1 flex">
            <div className="flex-col w-1/2 p-7">
              <div className="flex space-x-2 justify-end text-sm mb-5">
                <button className="text-gray-500 font">Login</button>
                <button className="text-green-700 font-bold">Sign up</button>
              </div>
              <h3 className="text-2xl font-bold mb-2">SIGN UP</h3>
              <form className="space-y-3">
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder="User Name"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
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
                <div>
                  <input
                    type="text"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <button className="block w-full bg-green-700 p-2 rounded-lg text-white hover:bg-green-600 transition duration-200">
                  Sign In
                </button>
              </form>
            </div>
            <div className="bg-green-700 w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
