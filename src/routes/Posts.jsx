import { Outlet } from "react-router-dom";

import PostList from "../components/PostList.jsx";

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

export default Posts;
