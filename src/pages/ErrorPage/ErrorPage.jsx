import { useRouteError } from "react-router-dom";
import { ErrorPageStyled } from "./ErrorPageStyled.jsx"
import { Navbar } from "../../components/Navbar/Navbar.jsx"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />
      <ErrorPageStyled>
        <img src="/img/404.png"></img>
        <p>Sorry, an unexpected error has occurred :(</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ErrorPageStyled>
    </>
  );
}