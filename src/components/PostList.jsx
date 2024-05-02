import { useState } from "react";

import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import classes from "./PostList.module.css";

const PostList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={"Cask"} body={"Base Woods"} />
      </ul>
    </>
  );
};

export default PostList;
