import React from "react";
import css from "./ShowPost.module.css";

const ShowPost = props => {
    return (
        <div className={css.container}>
            {props.posts
                ? props.posts.map((post, index) => {
                      return (
                          <ul className={css.comments}>
                              <li className={css.description}>
                                  {post.description}
                              </li>
                              {post.comments.map(comment => {
                                  return (
                                      <li key={comment.date}>
                                          <p className={css.comment}>
                                              {comment.comment}
                                          </p>
                                          <p className={css.info}>
                                              - {comment.date}
                                          </p>
                                      </li>
                                  );
                              })}
                          </ul>
                      );
                  })
                : null}
        </div>
    );
};

export default ShowPost;
