import React, { useState, useRef } from "react";
import "../index.css";
import { Users } from "../UsersData";
import Heart from "react-animated-heart";

function Blogcontainer() {
  const [newPostItem, setNewPostItem] = useState([]);
  const input = useRef();
  const [like, setLike] = useState([]);
  const [isClick, setClick] = useState(false);

  const likeHandler = () => {
    setLike(isClick ? like - 1 : like + 1);
    setClick(!isClick);
  };
  var addToList = (e) => {
    e.preventDefault();
    setNewPostItem([...newPostItem, input.current.value]);
  };

  const clearInput = () => (input.current.value = "");
  return (
    <>
      <div className="containerInput">
        <div className="blogContainer">
          <h4>Create post</h4>
          <div>
            <form className="blog" onSubmit={clearInput}>
              <label>
                <input
                  ref={input}
                  type="text"
                  id="height"
                  placeholder="Share your thoughts..."
                />
              </label>
              <button onClick={addToList} className="postBtn">
                Post
              </button>
            </form>
          </div>
        </div>
      </div>

      {newPostItem.map((item, index) => (
        <div className="postBottomLeft" key={index}>
          <div className="new_post">
            <div className="List">
              <div className="postTop">
                <div className="postTopLeft">
                  <img
                    className="postProfileImg"
                    src={Users[0].profilePicture}
                    alt=""
                  />
                  <p className="postUsername">{Users[0].username}</p>
                </div>
              </div>{" "}
              <p className="inputList">{item} </p>
              <span
                key={index}
                className="postLikeCounter"
                onClick={likeHandler}
              >
                <Heart
                  key={index}
                  className="likeIcon"
                  isClick={isClick}
                  onClick={() => setClick(!isClick)}
                />
                {like} people like it
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Blogcontainer;
