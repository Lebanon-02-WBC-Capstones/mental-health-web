import React, { useState, useRef, useContext } from "react";
import "../index.css";
import { UserContext } from "../UsersData";
import Heart from "react-animated-heart";
// import "../styles/app.css";
function Blogcontainer() {
  let context = useContext(UserContext);
  const [newPostItem, setNewPostItem] = useState([]);
  const input = useRef();
  const [like, setLike] = useState([]);
  const [isClick, setClick] = useState(false);

  const likeHandler = () => {
    setLike(isClick ? like - 1 : like + 1);
    setClick(!isClick);
  };
  let addToList = (e) => {
    e.preventDefault();
    setNewPostItem([...newPostItem, input.current.value]);
  };

  const clearInput = () => (input.current.value = "");
  return (
    <>
      <div className="flex justify-center pb-2">
        <div className="border-purple-900 bg-green-700 border-solid rounded-2xl flex justify-center items-center p-3 ">
          <h4>Create post</h4>

          <form className="flex items-center p-3" onSubmit={clearInput}>
            <label>
              <input
                ref={input}
                type="text"
                className="rounded-2xl leading-10 w-96 outline-none text-lg"
                // value={ input.current?.value}
                placeholder="    Share your thoughts..."
              />
            </label>

            <button
              onClick={addToList}
              className="leading-8 ml-4 rounded-2xl  bg-purple w-20  border-none relative text-base hover:text-white	"
            >
              Post
            </button>
          </form>
        </div>
      </div>

      {newPostItem.map((item, index) => (
        <div className="flex justify-center p-4	items-center " key={index}>
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

            <p className="break-words ml-4 ">{item} </p>
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
      ))}
    </>
  );
}
export default Blogcontainer;
