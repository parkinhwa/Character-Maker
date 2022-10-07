import faceImage from "../../img/얼굴.png";
import * as S from "./style"
import { useCharacterContext } from "../../hooks/useCustomContext";

export const Canvas = () => {
  const { hair, expresstion } = useCharacterContext();

  return (
    <S.Canvas>
      <S.Picture>
        <S.Img src={faceImage} />
      </S.Picture>
      <S.Picture>
        <S.Img src={expresstion}/>
      </S.Picture>
      <S.Picture>
        <S.Img src={hair}/>
      </S.Picture>
    </S.Canvas>
  );
};
