import React from "react";
import CurrentLocation from "../components/CurrentLocation";
import PostForm from "../components/PostForm";

const Post = props => {
    return (
        <div>
            <h1>Post</h1>
            <CurrentLocation />
            <PostForm />
        </div>
    );
};
export default Post;
