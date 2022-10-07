import { CardMedia } from "@mui/material";
import { useCharacterActionContext, useCharacterContext } from "../../hooks/useCustomContext";
import * as S from "./style";

interface CategoryType {
  imagelist: Array<{ type: string, key: string, src: string }>
}

export const Category = ({ imagelist }: CategoryType) => {
  const { hair, expresstion } = useCharacterContext();
  const { setCaracter } = useCharacterActionContext();

  const handleClick = (type: string, src: string) => {
    if (type === "hair") setCaracter({ hair: src, expresstion })
    if (type === "expresstion") setCaracter({ hair, expresstion: src })
  }

  return (
    <S.Category>
      {imagelist.length > 0 &&
        imagelist.map((image) => {
          return (
            <S.StyledCard key={image.key} onClick={() => handleClick(image.type, image.src)}>
              <CardMedia
                component="img"
                height='100%'
                image={image.src}
              />
            </S.StyledCard>
          );
        })}
    </S.Category>
  );
};
