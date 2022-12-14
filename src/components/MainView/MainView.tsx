import { Canvas, Category } from "../index";
import { CharacterContextProvider } from "../../contexts/CharacterContextProvider";
import * as S from "./style";

export const MainView = () => {
  const hairImageList = [
    {
      type: "hair",
      key: "shorthair",
      src: "img/단발머리.png"
    },
    {
      type: "hair",
      key: "braidshair",
      src: "img/땋은머리.png"
    },
    {
      type: "hair",
      key: "longhair",
      src: "img/긴머리.png"
    }
  ];
  const expresstionImageList = [
    {
      type: "expresstion",
      key: "cute",
      src: "img/표정1.png"
    },
    {
      type: "expresstion",
      key: "happy",
      src: "img/표정2.png"
    },
    {
      type: "expresstion",
      key: "cool",
      src: "img/표정3.png"
    }
  ];

  return (
    <CharacterContextProvider>
      <S.Container>
        <Canvas />
        <Category imagelist={hairImageList} />
        <Category imagelist={expresstionImageList} />
      </S.Container>
    </CharacterContextProvider>
  );
};
