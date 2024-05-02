import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;
