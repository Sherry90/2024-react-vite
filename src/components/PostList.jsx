import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import classes from "./PostList.module.css";

const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author={"Sherry"} body={"Bug Report"} />
        <Post author={"Cask"} body={"Base Woods"} />
      </ul>
    </>
  );
};

export default PostList;
