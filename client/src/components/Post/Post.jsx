import React, { useState } from "react";

const Post = () => {
  const [createPost, setCreatePost] = useState("");

  const handlePost = (e) => {
    setCreatePost(e.target.value);
  };
  const display_post = (e) => {
    e.preventDefault();
    console.log("Post shared:", createPost);
    setCreatePost("");
  };
  return (
    <>
      <h1>Create a post</h1>
      <form onSubmit={display_post}>
        <div className="post">
          <textarea
            placeholder="Whats on your mind"
            value={createPost}
            onChange={handlePost}
            style={{
              height: `${createPost.split("\n").length * 20}px`,
              resize: "none",
            }}
          />
          <button type="submit">Create</button>
        </div>
      </form>
    </>
  );
};

export default Post;
