import styled from "styled-components"

const Header = styled.header`
  position: sticky;
  height: 80px;
  background-color: white;
  padding: 0.2rem;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  z-index: 3;
`

const LogoImageDiv = styled.div`
  width: 120px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }

  @media (max-width: 480px) {
    width: 80px;
  }
`

const LogoImage = styled.img`
  height: 50px;
  width: 55px;

  @media (max-width: 480px) {
    height: 35px;
    width: 40px;
  }
`

const LogoText = styled.h6`
  font-size: 1.3rem;
  line-height: 1.1rem;
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 0.8rem;
  }
`

const InputSearchArea = styled.div`
  display: flex;
  min-width: 120px;
  max-width: 300px;
  width: 30vw;
  
  button {
    color: #4d4d4d;
    background-color: #e0e0e0;
    padding: 7px;
    border-radius: 0px 4px 4px 0px;
    border: none;
    cursor: pointer;
    width: 20%;
    min-width: 30px;
    overflow: hidden;
  }
  
  input {
    background-color: #e0e0e0;
    border: none;
    padding: 7px 20px 7px 20px;
    border-radius: 4px 0px 0px 4px;
    width: 80%;
  
    :focus {
    border: 2px solid #FFC900;
    background-color: white;
    }
  }
`

const UserInfoNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .7rem;
      cursor: pointer;
      text-decoration: none;
      border-radius: 5px;
      color: black;
    }
    
    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      cursor: pointer;
    }
    
    img:hover {
      opacity: 0.7;
      transition: ease 0.2s;
    }
  
    :hover{
      color: #FFCE02;
      transition: ease 0.2s;
    }
  
    i#logoutBtn{
      font-size: 22px;
      right: 10px;
      padding: .7rem;
      border-radius: 50px;
      cursor: pointer;

      @media (max-width: 480px) {
        display: none;
      }
    }
    i#logoutBtn:hover {
      color: red;
      transition: ease 0.2s;
    }

    span {
      @media (max-width: 480px) {
        display: none;
      }
    }

    @media (max-width: 480px) {
      width: 70px;
    }
`

const ErrorSpan = styled.span`
  display: flex;
  color: #9e0000;
  font-weight: bold;
  padding: .4rem;
  background-color: white;
  justify-content: center;
  background-color: #ffaeae;
`

export { Header, LogoImageDiv, LogoImage, LogoText, InputSearchArea, UserInfoNav, ErrorSpan }