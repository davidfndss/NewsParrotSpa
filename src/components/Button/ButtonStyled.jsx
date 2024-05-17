import styled from "styled-components"

const ButtonStyled = styled.button`
  background-color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  color: white;
  font-weight: 900;
  font-size: 16px;
  min-height: 45px;
  width: auto;
  max-width: 220px;
  cursor: pointer;
  transition: 0.3s ease;
  text-transform: uppercase;
  overflow: hidden;

  &:hover {
  background-color: #252524;
  }

  @media (max-width: 480px) {
    min-width: 80px;
    padding: 5px 10px;
    min-height: 35px;
    font-size: 14px;
  }
`

export { ButtonStyled }