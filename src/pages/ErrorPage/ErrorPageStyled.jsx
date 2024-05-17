import { styled } from "styled-components"

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80vw;
  min-height: 80vh;
  img {
    height: 50%;
    width: 50%;
    max-height: 500px;
    max-width: 500px;
  }
`

export { ErrorPageStyled }