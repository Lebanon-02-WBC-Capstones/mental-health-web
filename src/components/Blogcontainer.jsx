import React, { useState, useRef, useContext } from "react";
import "../index.css";
import { UserContext } from "../UsersData";
import Heart from "react-animated-heart";
// import "../styles/app.css";
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
    setPosts([...posts, { text: input.current.value, user: "John Doe", likes: [] }]);
    input.current.value = "";
  };

   return (
    <>
      <div className="flex justify-center  pb-2">
        <div className="border-purple-900 bg-gray-200 border-solid justify-evenly  rounded-2xl w-4/5	flex  items-center p-3 ">
          <h4>Create post</h4>

          <form className="flex items-center p-3">
            <label>
              <input
                ref={input}
                type="text"
                className="rounded-2xl leading-10 w-96 outline-none text-md"
                 placeholder="    Share your thoughts..."
              />
            </label>

            <button
              onClick={addToList}
              className="leading-8 ml-4 rounded-2xl  bg-gray-400 w-20  border-none relative text-base hover:text-white	"
            >
              Share
            </button>
          </form>
        </div>
      </div>

       {posts.map((item, index) => (
        <div key={index} className="flex justify-center p-2.5">
        <div className="flex justify-center p-4 items-center overflow-auto break-words	pl-3  w-10/12 bg-gray-200 rounded-3xl   border-solid " >
    
           
              <img
                className="h-20   rounded-full  "
                src={context[0].profilePicture}
                alt=""
              />
              <p className="text-base p-2 flex italic w-20">
                <strong>{context[0].username}</strong>
              </p>
        

            <p className="italic break-words ml-4 w-4/6 ">{item} </p>
            <div className=" float-right ">
              <span
                className="text-sm h-14  flex justify-center items-center w-24    "
                onClick={likeHandler}
              >
              
<Heart isClick={item.likes.includes("John Doe")} onClick={() => item.likes.push("John Doe")} />
               </span>
               <span>
                  
                <strong className="text-sm "> {item} people like it</strong>
                </span></div>
          
          </div>
        </div>
      ))}
    </>
  );
}
export default Blogcontainer;
