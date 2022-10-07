import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Category = styled.div`
  display: flex;
  margin: 20px 10px;
`;

export const StyledCard = styled(Card)`
  width: 20vh;
  max-width: 20vh;
  height: 20vh;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: scale(1.01) translateY(-10px);
  }
`;
