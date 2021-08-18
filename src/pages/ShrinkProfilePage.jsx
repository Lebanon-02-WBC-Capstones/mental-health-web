import React from "react";
import Navbar from "../components/NavigationBar";

function ShrinkProfilePage() {
  return (
    <>
      <Navbar mode="user" />
      <div className="shrinkHeader w-full shadow-md bg-blue-500 h-60">
        {" "}
        hello
        {/* <div className="h-50 bg-shrink-bg bg-cover bg-no-repeat"></div>
             <div className="h-20 bg-yellow-500 ">
                 <div ></div>
                 <div></div>
             </div> */}
      </div>
      <div className="shrinkBody w-full bg-gray-300 h-96 p-8 flex justify-center items-center">
        <div className="w-96 shadow-md h-full rounded-xl bg-white"></div>
      </div>
    </>
  );
}

export default ShrinkProfilePage;
