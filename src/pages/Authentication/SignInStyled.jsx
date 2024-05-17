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
    }
  
    @media (max-width: 480px) {
      height: auto;
      flex-direction: column-reverse;
        #background {
          padding: 15px 0px 7px 0px;
          justify-content: center;
          background-color: white;
          height: 140px;
        }
    }
    
  transition: 0.7s ease;
`

const Section = styled.section`
  margin: auto;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${ (props) => props.type == "signin" ?  "white" : "gray" };

    h2 {
      color: black;
      font-size: 1.8rem;
    }
  
    form {
      padding: 1rem;
      width: 90%;
      height: 90%;
      max-width: 410px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    a {
      text-decoration: none;
      color: #FFCE02;
    }
  
    a:hover {
      color: black;
      transition: ease 0.3s;
      font-weight: bold;
    }
  
    div#inputArea {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 7px;
      
        input {
          margin-top: 5px;
          border: gray solid 1px;
          margin-left: -1px;
        } 
        
        div#errorsArea {
          margin-top: 7px;
          height: 45px;
          overflow: hidden;
            span {
              display: block;
            }
        }
    }
  
    div#btnArea {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 10px;
    }

    p {
      font-size: 14px;
      color: gray;
    }
  
    @media (max-width: 480px) {
      justify-content: start;
      
        h2 {
          font-size: 24px;
        }
        
        label {
          font-size: 14px;
        }
        
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        
        form {
          padding: 0rem 0.5rem 1rem 0.5rem;
          height: 95%;
        }

        span {
          font-size: 12px;
        }
    }
`
const ErrorSpan = styled.span`
  color: red;
  font-size: 14px;
`

export { AuthContainer, Section, ErrorSpan }