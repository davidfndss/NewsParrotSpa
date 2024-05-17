import styled from "styled-components"

const HomeHeader = styled.header`
  margin: auto;
  margin-top: 15px;
  width: 95%;
  max-height: 20rem;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  transition: 0.7s ease;
`

const HomeBody = styled.main`
  height: 100%;
  width: 95%;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 49.7%);
  grid-gap: .5rem;
  margin-top: 1rem;
  @media (max-width: 768px) and (min-width: 481px) {
    grid-template-columns: repeat(2, 49.4%);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 100%);
  }
  transition: 0.7s ease;
` 

const AddBtn = styled.button`
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  color: white;
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
  }
  
  i {
    font-size: 25px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  :hover {
    border: white solid 3px;
    background-color: #FFCE02;
    transition: 0.3s ease;
  }

  i:hover{
    background-color: #FFCE02; 
  }
  
`

const LoadMoreNewsBtn = styled.button`
  margin: auto;
  border: none;
  width: 100%;
  color: black;
  font-size: 35px;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 1rem;

  i {
    padding: 10px;
    display: block;
    width: 100%;
  }

  :hover {
    color: #FFCE02;
    transition: ease 0.3s;
  }

  :focus, :active {
      outline: none;
      -webkit-tap-highlight-color: transparent; /* Remove highlight color in mobile browsers */
  }
`

export { HomeHeader, HomeBody, AddBtn, LoadMoreNewsBtn }