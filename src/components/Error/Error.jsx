
import { ErrorPageStyled } from "../../pages/ErrorPage/ErrorPageStyled.jsx"


function ErrorComponent({ text } ) {
  return (
      <ErrorPageStyled>
        <img src="/img/404.png"></img>
        <p>
          <i>{text}</i>
        </p>
      </ErrorPageStyled>
  )
}

export { ErrorComponent }