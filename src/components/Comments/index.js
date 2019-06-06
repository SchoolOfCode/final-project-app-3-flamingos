import React, { useState } from "react";
import { LoggedInContext } from "../../components/LoggedInContext";
import AddComment from "../AddComment"
import css from "./Comments.module.css";

const Comments = props => {
    const [addComment, setAddComment] = useState(false);

    return (
        <div className={css.container}>
            {props.post.comments.map(c => {
                const { comment, date, userId } = c
                return (
                    <div className={css.comment}>
                        <div>{comment}</div>
                        <br />
                        <div className={css.metaData}><span>{userId.displayName}</span> <span>{date}</span></div>
                    </div>
                )
            })}
            {Boolean(localStorage.getItem("token")) && <div className={css.comment}>
                <div>Add a Comment</div>
                <br />
                <AddComment postId={props.post.postId} setPost={props.setPost} />
            </div>}
        </div>
    )
}

export default Comments;
