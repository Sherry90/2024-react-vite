import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import classes from "./PostList.module.css";

const PostList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={"Cask"} body={"Base Woods"} />
      </ul>
    </>
  );
};

export default PostList;
