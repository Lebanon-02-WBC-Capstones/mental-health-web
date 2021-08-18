import React from "react";
import Navbar from "../components/NavigationBar";
import psych from "../psych.png";

function SignUpPhsyciatrist() {
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
              <h3 className="text-2xl font-bold mb-4">MORE INFO</h3>
              <form className="space-y-3">
                <div>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="First Name"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Last Name"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="liscence-type"
                    placeholder="Liscence Type"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="country"
                    placeholder="Country of Liscence"
                    className="border border-black px-1 block w-full outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="What makes you interested in joining our family?"
                    className="border border-black px-1 block w-full outline-none"
                  ></textarea>
                </div>
                <button className="block w-full bg-green-700 p-2 rounded-lg text-white hover:bg-green-600 transition duration-200 shadow-md">
                  Send Request
                </button>
              </form>
            </div>
            <div
              className="bg-green-700 w-1/2"
              style={{
                backgroundImage: `url(${psych})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPhsyciatrist;
