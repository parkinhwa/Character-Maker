import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const Category = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  min-height: 120px;
`;

export const StyledCard = styled(Card)`
  width: 20vh;
  max-width: 20vh;
  height: 20vh;
  cursor: pointer;
  overflow: hidden;
  min-width: 120px;
  min-height: 120px;
`;
