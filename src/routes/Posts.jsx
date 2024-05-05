import { useState } from "react";

import PostList from "./components/PostList.jsx";

const Posts = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
};

export default Posts;
