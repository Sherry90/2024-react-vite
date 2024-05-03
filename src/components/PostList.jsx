import { useState } from "react";

import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import classes from "./PostList.module.css";

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPost] = useState([]);

  const addPostHandler = (postData) => {
    setPost((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={Math.floor(Math.random() * 1000000)}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
