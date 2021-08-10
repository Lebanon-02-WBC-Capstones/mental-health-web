import "../postfeed.css";

import { Users, Posts } from "../UsersData";
import React, { useState } from "react";

export default function Post() {
  const [like, setLike] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users[0].username}</span>
            <span className="postDate">{Posts[0].date}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{Posts[0].post}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/154/heavy-black-heart_2764.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
        </div>
      </div>
    </div>
  );
}
