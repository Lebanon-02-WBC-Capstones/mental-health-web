import React from "react";
import Navbar from "../components/NavigationBar";

function SignIn() {
  return (
    <>
      <Navbar mode="visitor" />
      <div>
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
          <div className="bg-white p-7 w-5/6 align-middle rounded shadow-2x1 flex">
            <div className="flex-col">
              <p>Login</p>
              <p>Sign up</p>
              <h3>SIGN IN</h3>
              <h5>Sign in to enjoy more benefits</h5>
              <form>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="text" id="password" />
                </div>
                <button>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
