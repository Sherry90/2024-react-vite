const words = ["Sherry", "Bourbon"];

const Post = () => {
  const chooseWord = Math.random() > 0.5 ? words[0] : words[1];
  
  return (
    <div>
      <p>{chooseWord}</p>
      <p>Whisky Daisuki</p>
    </div>
  );
};

export default Post;
