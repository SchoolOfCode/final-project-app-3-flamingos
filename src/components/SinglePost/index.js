import React from "react";
import css from "./SinglePost.module.css";
import Marker from "../../images/mapMarker.png";
import "../../index.css";

const SinglePost = props => {
    const { postId, userId, description } = props.post;
    let { createdAt, updatedAt } = props.post;

    const newDate = new Date(createdAt);
    const newTime = new Date(updatedAt);
    createdAt = newDate.toDateString();
    updatedAt = newTime.toTimeString().slice(0, 8);

    return (
        <div
            className={css.mainContainer}
            onClick={() => props.history.push(`/p/${postId}`)}
        >
            <img className={css.iconImage} src={Marker} alt="Marker" />
            <div className={css.textContainer}>
                <div className={css.description}>{description}</div>
                <br />
                <div className={css.metaData}><span>{userId.displayName}</span> <span>{createdAt} at: {updatedAt}</span></div>
            </div>
        </div>
    );
};

export default SinglePost;
