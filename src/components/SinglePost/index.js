import React from "react";
import css from "./SinglePost.module.css";

const SinglePost = props => {
  const [userName, postCategory, userID, description, _id] = props.post;

  return (
    <div className={css.mainContainer}>
      <div className={css.usernameContainer}>
        <div className={css.userName}>{userName}</div>
      </div>
      <div className={css.secondContainer}>
        <div className={css.iconContainer}>
          <img className={css.iconImage} />
        </div>
        <div className={css.description}>{description}</div>
      </div>
      <div className={css.postIDContainer}>
        <div className={css.postID}>{_id}</div>
        <div className={css.updateDate}>date</div>
      </div>
    </div>
  );
};

export default SinglePost;
