import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Avatar from '@mui/material/Avatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import {

//   Publish,
//   Repeat,
//   VerifiedUser,
// } from "@mui/core";
import {FavoriteBorder} from "@mui/icons-material";
import React from "react";
import "./Post.css";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorder />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;