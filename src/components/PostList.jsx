import Post from "./Post.jsx";
import classes from "./PostList.module.css"

const PostList = () => {
  return (
    <ul className={classes.postList}>
      <Post author={"Sherry"} body={"Bug Report"} />
      <Post author={"Cask"} body={"Base Woods"} />
    </ul>
  );
};

export default PostList;
