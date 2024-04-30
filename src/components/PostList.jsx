import Post from "./Post.jsx";

const PostList = () => {
  return (
    <ul>
      <Post author={"Sherry"} body={"Bug Report"} />
      <Post author={"Cask"} body={"Base Woods"} />
    </ul>
  );
};

export default PostList;
