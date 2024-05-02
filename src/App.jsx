import { useState } from "react";

import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
};

export default App;
