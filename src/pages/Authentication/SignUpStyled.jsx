import styled from "styled-components"

const AuthContainer = styled.div`
  height: 80vh;
  width: 80vw;
  margin: 10vh auto 10vh auto;
  display:flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    #background {
      height: 100%;
      width: 100%;
    }
  
    @media (max-width: 768px) {
      flex-direction: column;
      height: 100%;

      #background {
        height: 135px;
        background-color: white;
        padding-top: 1rem;
      }

      transition: 0.7s ease;
    }
`

const Section = styled.section`
  margin: auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${ (props) => props.type == "signup" ?  "white" : "gray" };
  
    h2 {
      font-size: 10px;
      color: black;
      font-size: 1.7rem;
    }
  
    form {
      width: 90%;
      height: 95%;
      max-width: 380px;
      overflow: hidden;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      gap: 10px;
  
      div#inputArea {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    label {
      color: black;
      font-size: 14px;
    }
  
    div#errorsArea {
      margin-top: 7px;
      min-height: 50px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      span {
        color: red;
        display: block;
        font-size: 12px;
      }
    }
    
    input {
      margin-top: 5px;
      background-color: white;
      border: solid gray 1px;
    }

    @media (max-width: 768px) {
      img {
        height: 110px;
        width: 110px;
        border-radius: 50%;
      }

      h2 {
        font-size: 20px;
      }
    
      div#errorsArea {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      form {
        padding: 0px 1rem 1rem 1rem;
      }
    }
`

const InputValidationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
    input {
      width: 90%;
      padding-right: 0;
      border-radius:5px 0px 0px 5px;
      border-right: none;
    }
  
    i {
      margin-top: 5px;
      padding: .5rem;
      background-color: white;
      height: 33px;
      width: 40px;
      border-radius: 0px 5px 5px 0px;
      display: flex;
      align-items: center;
      position: relative;
      border: gray solid 1px;
      border-left: none;
      color: black;
      font-size: 20px;
    }

`
const ErrorSpan = styled.span`
  color: red;
`

export { AuthContainer, Section, InputValidationDiv, ErrorSpan }