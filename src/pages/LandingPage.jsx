import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  
  return (
    <div className="flex flex-row overflow-hidden h-full w-full absolute inset-0">
        <div className="flex flex-col items-center w-2/3 py-2.5 bg-landingpage-pic bg-no-repeat bg-100% sm:w-full">
             <div className="bg-gray-100 bg-opacity-90  h-full w-9/12 ">
                 <span className="text-green-700 text-3xl font-mono">Cerebra</span>
                 <div className="flex flex-col items-center leading-6">
                 <img
                 className="w-20 h-22"
                 src="https://www.freeiconspng.com/uploads/brain-2.png"
                 alt="brain-icon"
                 />
                 <p className="font-serif my-4">
                 <b>YOUR MENTAL HEALTH <br></br> &emsp; IS IMPORTANT.</b>
                 </p>
                 <p className="text-green-700 leading-1 text-4xl my-4">
                 <b>&emsp; &ensp; KNOW <br></br> WHAT WORKS<br></br>&emsp; FOR YOU.</b>
                 </p>
                 <p className="font-serif my-4">
                 Meditation can help, but it is not the <br></br>&emsp; &emsp;
                 &emsp; &ensp; only solution.
                 </p>
                <p className="bg-green-700  h-1 w-3/4 rounded my-4"></p>
                <p className="font-serif pb-1">
                <b>Know your option and take care of yourself.</b>
                </p>
                <Link to="/Blog" className="bg-green-700 font-serif rounded-xl items-center text-base text-white p-2.5 m-1 no-underline">Join our community</Link>
                </div>
             </div>  
        </div>
        <div className=" bg-green-700  flex justify-center w-1/3 sm:hidden">
            <div className=" flex flex-col items-center m-3 border-2 border-white border-solid">
                <img className="w-20 h-22 pt-8" src="https://www.freeiconspng.com/uploads/brain-2.png"/>
                <p className="text-center font-serif leading-70px px-20 text-white text-3xl md:text-xl  lg:text-3xl xl:text-2xl">
                Maybe we all have darkness inside of us and some of us are better at
                dealing with it than others.
                </p>
                <p className="text-center font-serif text-white my-4 text-xs ">JASMINE WARGA. <br></br>MY HEART AND OTHER BLACK HOLES.</p>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
