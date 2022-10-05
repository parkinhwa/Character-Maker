import { Canvas, Category, Title } from "./components";
import "./App.css";

const hairImageList = [
  {
    key: "shorthair",
    src: "img/단발머리.png"
  },
  {
    key: "braidshair",
    src: "img/땋은머리.png"
  },
  {
    key: "longhair",
    src: "img/긴머리.png"
  }
];

const expresstionImageList = [
  {
    key: "cute",
    src: "img/표정1.png"
  },
  {
    key: "happy",
    src: "img/표정2.png"
  },
  {
    key: "cool",
    src: "img/표정3.png"
  }
];

const App = () => {
  return (
    <div className="App">
      <Title />
      <Canvas />
      <Category imagelist={hairImageList} />
      <Category imagelist={expresstionImageList} />
    </div>
  );
};

export default App;
