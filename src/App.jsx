import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

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
