import React from "react";
import css from "./SinglePost.module.css";
import Marker from "../../images/mapMarker.png";
import "../../index.css";

const SinglePost = props => {
    const { postId, userId, description, createdAt, updatedAt } = props.post;

    return (
        <div
            className={css.mainContainer}
            onClick={() => props.history.push(`/p/${postId}`)}
        >
            <div className={css.iconContainer}>
                <img className={css.iconImage} src={Marker} alt="Marker" />
            </div>
            <div className={css.textContainer}>
                <div className={css.secondContainer}>
                    <div className={css.description}>{description}</div>
                </div>
                <div className={css.usernameContainer}>
                    <div className={css.userNameDescription} id="postedBy">
                        Posted by:{" "}
                    </div>
                    <div className={css.userName}>{userId.displayName}</div>
                </div>
                <div className={css.postIDContainer}>
                    <div className={css.date} id="dateCreated">
                        Date Created:&nbsp;
                    </div>
                    <div className={css.updateDate}>{createdAt}</div>
                    <div className={css.date}>&nbsp;at&nbsp;</div>
                    <div>{updatedAt}</div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
