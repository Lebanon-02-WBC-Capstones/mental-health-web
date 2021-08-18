import React from "react";
import { Link } from "react-router-dom";
const NavigationBar = (props) => {
  if (props.mode == "user") {
    return (
      <>
        <nav className="bg-green-800 flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link to="/"
              className="font-bold text-xl no-underline text-white ml-6"
              
            >
              Cerebra
            </Link>
          </div>
          <div className="flex space-x-24">
            <div className="space-x-6 mr-50">
              <Link to="/shrink-carousel" className="text-l text-white no-underline" >
                Book
              </Link>
              <Link to="/contact-us" className="text-l text-white no-underline" >
                Contact Us
              </Link>
            </div>
            <div className="flex justify-between flex-wrap space-x-6">
              <a className="text-l text-white no-underline" href="#">
                Logout
              </a>
              <a href="#">
                <img
                  src="https://www.kindpng.com/picc/m/699-6998313_ios-bell-outline-comments-white-bell-icon-png.png"
                  alt="Logo"
                  className="w-6 rounded-full"
                />
              </a>
              <a href="#">
                <img
                  src="https://eshendetesia.com/images/user-profile.png"
                  alt="Logo"
                  className="w-7 rounded-full"
                />
              </a>
              <a></a>
            </div>
          </div>
        </nav>
      </>
    );
  } else if (props.mode == "visitor") {
    return (
      <>
        <nav className="bg-green-800 flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a
              className="font-bold text-xl no-underline text-white ml-6"
              href="#"
            >
              Cerebra
            </a>
          </div>
          <div className="flex space-x-24">
            <div className="space-x-6 mr-50">
              <a
                className="text-l text-gray-400 no-underline hover:text-gray-400"
                href="#"
              >
                Book
              </a>
              <a className="text-l text-white no-underline" href="#">
                Contact Us
              </a>
            </div>
            <div className="flex justify-between flex-wrap space-x-6">
              <a className="text-l text-white no-underline" href="#">
                Login
              </a>
              <a></a>
            </div>
          </div>
        </nav>
      </>
    );
  } else if (props.mode == "psychiatrist") {
    return (
      <>
        <nav className="bg-green-800 flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a
              className="font-bold text-xl no-underline text-white ml-6"
              href="#"
            >
              Cerebra
            </a>
          </div>
          <div className="flex space-x-24">
            <div className="space-x-6 mr-50">
              <a className="text-l text-white no-underline" href="#">
                Bookings
              </a>
              <a className="text-l text-white no-underline" href="#">
                Contact Us
              </a>
            </div>
            <div className="flex justify-between flex-wrap space-x-6">
              <a className="text-l text-white no-underline" href="#">
                Logout
              </a>
              <a href="#">
                <img
                  src="https://www.kindpng.com/picc/m/699-6998313_ios-bell-outline-comments-white-bell-icon-png.png"
                  alt="Logo"
                  className="w-6 rounded-full"
                />
              </a>
              <a href="#">
                <img
                  src="https://eshendetesia.com/images/user-profile.png"
                  alt="Logo"
                  className="w-7 rounded-full"
                />
              </a>
              <a></a>
            </div>
          </div>
        </nav>
      </>
    );
  } else {
    return <></>;
  }
};

export default NavigationBar;
