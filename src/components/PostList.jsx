import { useState, useEffect } from "react";

import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import classes from "./PostList.module.css";

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPost] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);  
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPost(resData.posts);
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPost((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
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
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isPosting && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
};

export default PostList;
