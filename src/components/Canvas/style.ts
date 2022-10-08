import styled from "@emotion/styled";

export const Canvas = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  display: flex;
  align-item: center;
  justify-content: center;
  border: solid 1px #e6e6e6;
  min-height: 240px;
`;

export const Picture = styled.div`
  position: absolute;
  height: 95%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
