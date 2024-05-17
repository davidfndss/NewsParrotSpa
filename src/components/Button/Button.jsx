import { ButtonStyled } from "./ButtonStyled.jsx"

const Button = function({ type, text }) {
  return <ButtonStyled type={type}>{text}</ButtonStyled>
}


export { Button }