import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import classes from "./PostList.module.css";
import { useState } from "react";

const PostList = () => {
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
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author={"Cask"} body={"Base Woods"} />
      </ul>
    </>
  );
};

export default PostList;
