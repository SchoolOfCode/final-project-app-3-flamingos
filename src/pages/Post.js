import React from "react";
import CurrentLocation from "../components/CurrentLocation";
import PostForm from "../components/PostForm";
import Logo from "../components/Logo";

// import css from "./cssModules/post.module.css";
import "../index.css";

const Post = props => {
    return (
        <div id="post">
            <Logo />
            <CurrentLocation />
            <PostForm />
        </div>
    );
}
export default Post;
