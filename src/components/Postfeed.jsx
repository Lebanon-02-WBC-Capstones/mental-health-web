 
import { UserContext } from "../UsersData";
import Heart from "react-animated-heart";
import React, { useState, useContext } from "react";

export default function Postfeed() {
  let context = useContext(UserContext);

  const [like, setLike] = useState([]);
  const [isClick, setClick] = useState(false);

  const likeHandler = () => {
    setLike(isClick ? like - 1 : like + 1);
    setClick(!isClick);
  };
  return (
    <div key={context.id} className="flex justify-center p-2.5">
    <div className="flex justify-center p-4 items-center overflow-auto break-words	pl-3  w-10/12 bg-gray-200 rounded-3xl   border-solid " >

       
          <img
            className="h-20   rounded-full  "
            src={context[0].profilePicture}
            alt=""
          />
          <p className="text-base p-2 flex italic w-20">
            <strong>{context[0].username}</strong>
          </p>
    

        <p className="italic break-words ml-4 w-4/6 ">{context[0].post} </p>
        <div className=" float-right ">
          <span
            className="text-sm h-14  flex justify-center items-center w-24    "
            onClick={likeHandler}
          >
             <Heart isClick={isClick} onClick={() =>
               setClick(!isClick)} />
           </span>
           <span>
              
            <strong className="text-sm "> {like} people like it</strong>
            </span></div>
      
      </div>
    </div>
  );
}
