import React from "react";
import css from "./SinglePost.module.css";

const SinglePost = props => {
  const { postId, userId, description, createdAt } = props.post;

  return (
    <div className={css.mainContainer}>
      <div className={css.usernameContainer}>
        <div className={css.userName}>{userId.displayName}</div>
      </div>
      <div className={css.secondContainer}>
        <div className={css.iconContainer}>
          <img className={css.iconImage} />
        </div>
        <div className={css.description}>{description}</div>
      </div>
      <div className={css.postIDContainer}>
        <div className={css.postID}>{postId}</div>
        <div className={css.updateDate}>{createdAt}</div>
      </div>
    </div>
  );
};

export default SinglePost;
