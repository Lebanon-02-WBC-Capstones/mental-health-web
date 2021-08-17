import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../UsersData";
import Heart from "react-animated-heart";
 
function Blogcontainer() {
  let context = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const input = useRef();
  const [isClick, setClick] = useState(false);
  const likeHandler = () => {
    setClick(!isClick);
  };

  let addToList = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      { text: input.current.value, user: "John Doe", likes: [] },
    ]);
    input.current.value = "";
  };

  return (
    <>
      <div className="flex justify-center mt-9	 pb-5">
        <div className=" bg-white border-solid justify-evenly  rounded-2xl w-4/5	flex  items-center p-3 ">
          <div>
            <h4 className="font-serif ">Create post</h4>
          </div>
          <form className="flex items-center p-3 ">
            <label>
              <input
                style={{
                  width: "590px",
                }}
                ref={input}
                type="text"
                className="rounded-2xl leading-10 w-96 outline-none text-md whitespace-pre-line   placeholder-gray-500 "
                placeholder="  Share your thoughts..."
              />
            </label>

            <button
              onClick={addToList}
              className="leading-8 ml-4 rounded-2xl  bg-gray-300 w-20  border-none relative text-base hover:text-white	"
            >
              Share
            </button>
          </form>
        </div>
      </div>

      {posts.map((item, index) => (
        <div key={index} className="flex justify-center p-2.5 ">
          <div className="flex bg-white justify-center p-4 items-center overflow-auto break-words	pl-3  w-10/12  rounded-3xl   border-solid ">
            <img
              className="h-20 rounded-full"
              src={context.profilePicture}
              alt=""
            />
            <p className="text-base p-2 flex italic w-20">
              <strong>{context.username}</strong>
            </p>

            <p className="italic break-words ml-4 w-9/12 ">{item.text}</p>
            <div className=" float-right w-28">
              <span
                className="text-sm h-14  flex justify-center items-center w-24    "
                onClick={likeHandler}
              >
                <Heart
                  isClick={item.likes.includes("John Doe")}
                  onClick={() => item.likes.push("John Doe")}
                />
              </span>
              <span>
                <strong className="text-sm">
                  
                  {item.likes.length} people like it
                </strong>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Blogcontainer;
