import React from "react";
import css from "./SinglePost.module.css";
import Marker from "../../images/mapMarker.png"
import "../../index.css";

const SinglePost = props => {
  const { postId, userId, description, createdAt } = props.post;

  return (
    <div className={css.mainContainer}>
      <div className={css.iconContainer}>
          <img className={css.iconImage} src={Marker} alt="Marker"/>
      </div>
        <div className={css.textContainer}>
          <div className={css.usernameContainer}>
          <div className={css.userNameDescription}>Posted by:</div>
          <div className={css.userName}>{userId.displayName}</div>
        </div>
        <div className={css.secondContainer}>
          <div className={css.description}>{description}</div>
        </div>
        <div className={css.postIDContainer}>
          <div className={css.date}>Date Created: </div><div className={css.updateDate}>{createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
