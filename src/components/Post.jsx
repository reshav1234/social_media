import React, { useState } from "react";

const Post = () => {
  const [createPost, setCreatePost] = useState();

  const handlePost = (e) => {
    setCreatePost(e.target.value);
  };
  return (
    <>
      <h1>Create a post</h1>
      <div className="post">
        <input placeholder="Whats on your mind" onChange={handlePost} />
      </div>
    </>
  );
};

export default Post;
