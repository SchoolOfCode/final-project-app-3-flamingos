import React from "react";
import css from "./PostImage.module.css";
import "../../index.css";

const SinglePost = props => {
    const { imageId, description } = props.post;

    return (
        <div
            className={css.mainContainer}
            style={{
                backgroundImage: `url("https://res.cloudinary.com/soc-report/image/upload/q_auto:low/${
                    imageId
                    }.jpg")
                                    `}}
            alt={description}
        />

    );
};

export default SinglePost;
