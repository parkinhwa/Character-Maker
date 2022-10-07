import styled from "@emotion/styled";

export const TitleContainer = styled.div`
  width: 90%;
  margin: auto;
  height: 15vh;
  min-height: 60px;
`

export const Title = styled.span`
  line-height: 15vh;
  font-size: 3.5rem;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
  @media (max-width: 300px) {
    font-size: 2rem;
  }
`
