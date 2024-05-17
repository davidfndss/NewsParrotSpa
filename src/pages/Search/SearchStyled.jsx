import styled from "styled-components"

const SearchBody = styled.main`
  height: 100%;
  width: 95%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(1, 80%);
  justify-content: center;
  grid-gap: .5rem;
  margin-top: 1rem;
  span {
    color: gray;
  }
` 

export { SearchBody }