import React from "react";
import { useEffect, useState } from "react";
import ShowPost from "../ShowPost";
import config from "../../config";

const PostTest = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      async function fetchData() {
        // if (postId) {
        let res = await fetch(`${config.POST_TEST}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        });
        let data = await res.json();
        console.log("post-test", data.payload);
        setPosts(data.payload);
        // }
      }
      fetchData();
    } catch (err) {
      console.log({ fetch: err });
    }
  }, [posts]);
  return (
    <>
      {console.log(posts)}
      {posts.map((item, idx) => {
        return <ShowPost posts={posts} />;
      })}
    </>
  );
};

export default PostTest;
