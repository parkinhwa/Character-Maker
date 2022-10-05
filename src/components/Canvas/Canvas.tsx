import faceImage from "../../img/얼굴.png";
import hairImage from "../../img/땋은머리.png";
import expresstion from "../../img/표정2.png";
import * as S from "./style"

export const Canvas = () => {
  return (
    <S.Canvas>
      <S.Picture>
        <S.Img src={faceImage} />
      </S.Picture>
      <S.Picture>
        <S.Img src={expresstion}/>
      </S.Picture>
      <S.Picture>
        <S.Img src={hairImage}/>
      </S.Picture>
    </S.Canvas>
  );
};
