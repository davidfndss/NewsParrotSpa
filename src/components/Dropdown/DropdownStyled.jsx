import styled from "styled-components"

const DropdownStyled = styled.div`
  position: fixed;
  right: 10px;
  top: 12vh;
  min-height: 45px;
  min-width: 45px;
  border-radius: 15px;
  padding: 3px;
  background-color: ${ props =>  props.$on ? "black" : "transparent"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    color: white;
    cursor: pointer;
    background-color: black;
  }

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

  i:hover{
    border: white solid 3px;
    transition: 0.3s ease;
  }

  button.optionsBtn {
    color: ${ props =>  props.$on ? "white" : "black"};
    background-color: transparent;
    :hover {
      color: #FFCE02;
    }
    @media (max-width: 480px) {
      background-color: black;
      color: white
    }
  }

  button.updateBtn {
    :hover {
      background-color: #FFCE02;
    }
  }

  button.deleteBtn {
    :hover {
      background-color: red;
    }
  }
    
  button.logoutBtn {
    :hover {
      background-color: red;
    }
  }  

  @media (max-width: 480px) {
    position: fixed;
    right: 10px;
    top: 90vh;
    bottom: 2vh;
    flex-direction: row;

    button {
      width: 40px;
      height: 40px;
    }

    i {
      font-size: 20px;
    }
  }
`

export { DropdownStyled }