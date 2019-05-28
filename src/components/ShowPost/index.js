import React from "react";
import css from "./ShowPost.module.css";

const ShowPost = props => {
    return (
        <div className={css.container}>
            {props.posts
                ? props.posts.map(post => {
                      return (
                          <div className={css.post}>
                              <h4 key={99} className={css.description}>
                                  {post.description}
                              </h4>
                              {post.imageUrl && (
                                  <img
                                      src={post.imageUrl}
                                      alt={post.description}
                                  />
                              )}
                              <p>
                                  {post.confirmed ||
                                      "this post is not yet confirmed, please confirm by following the link in the SMS we sent"}
                              </p>
                              <ul className={css.comments}>
                                  {post.comments &&
                                      post.comments.map((comment, index) => {
                                          return (
                                              <li key={index}>
                                                  <p className={css.comment}>
                                                      {comment.comment}
                                                  </p>
                                                  <p className={css.info}>
                                                      {
                                                          comment.userId
                                                              .displayName
                                                      }
                                                      - {comment.date}
                                                  </p>
                                              </li>
                                          );
                                      })}
                              </ul>
                          </div>
                      );
                  })
                : null}
        </div>
    );
};

export default ShowPost;
