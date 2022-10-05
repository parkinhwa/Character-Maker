import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Category = styled.div`
  display: flex;
  margin: 20px 10px;
`;

export const StyledCard = styled(Card)`
  width: 180px;
  margin: "auto";
  cursor: pointer;
  &:hover {
    transform: scale(1.01) translateY(-10px);
  }
`;
