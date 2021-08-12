import "../postfeed.css";
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
    <div className="flex justify-center p-4	items-center " key={context.id}>
      <div className="overflow-auto break-words	pl-3 p-2  w-1/7 bg-gray-200 rounded-3xl items-center border-solid">
        <div className="postTopLeft">
          <img
            className="  h-20 ml-2.5 rounded-full  "
            src={context.profilePicture}
            alt=""
          />
          <p className="text-base w-34 p-2">
            <strong>{context.username}</strong>
          </p>
        </div>

        <p className="break-words ml-4 ">{context.post} </p>
        <div className="items-center w-46 flex">
          <span
            className="text-sm flex items-center -ml-10 w-20  "
            onClick={likeHandler}
          >
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </span>
          <span className="text-sm flex items-center  ">
            <strong> {like} people like it</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
