import { CardMedia } from "@mui/material";
import * as S from "./style";

interface CategoryType {
  imagelist: Array<{ key: string, src: string }>
}

export const Category = ({ imagelist }: CategoryType) => {
  return (
    <S.Category>
      {imagelist.length > 0 &&
        imagelist.map((image) => {
          return (
            <S.StyledCard key={image.key} sx={{ maxWidth: 180, margin: "auto" }}>
              <CardMedia
                component="img"
                height="180"
                image={image.src}
              />
            </S.StyledCard>
          );
        })}
    </S.Category>
  );
};
