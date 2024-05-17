import styled from "styled-components"

const CardContainer = styled.section`
  background-color: white;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: ${ props => props.$top ? "14rem" : "10rem" };
  max-height: ${ props => props.$top ? "20rem" : "14rem" };
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  border-radius: .3rem;
  overflow: hidden;
  cursor: pointer;

    div.bannerArea{
      width: 60%;
      height: 100%;
      border-radius: 3px 0px 0px 3px;
      overflow: hidden;
  
        @media (max-width: 768px) {
          width: 200px; 
          padding: 10px;
          height: 150px;
            img {
              border-radius: 10px;
            }
        }
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    
  @media (max-width: 480px) {
    max-height: 120px;
  }

  transition: 0.7s ease;
`

const CardBody = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100%;
  width: 100%;
  padding: 1rem;
  gap: 5px;
  
    div {
      display: flex;
      justify-content: space-between;
      align-items: center; 
    }
  
    p {
       width: 100%;
       font-size: ${ props => props.$top ? "1.4rem" : "1rem" };
    }
  
    h1{
      width: 100%;
      font-size: ${ props => props.$top ? "2rem" : "1.1rem" };
    }
    
    button {
      width: 100%;
      border: none;
      color: black;
      background-color: white;
      border-radius: 5px;
      font-size: 30px;
      text-align: end;
      cursor: pointer;

      @media (max-width: 480px) {
        font-size: 25px;
      }
    }

  @media (max-width: 480px) {
    h1{
      font-size: ${ props => props.$top ? "16px" : "16px" };
    }
    p {
       font-size: ${ props => props.$top ? "14px" : "14px" };
    }
  }
`


const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: .7rem;
  padding: .7rem 0rem 0rem 0rem;
  letter-spacing: -0.5px;

    div {
      cursor: pointer; 
      display: flex;
      align-items: center;
      gap: 0.3rem;

      i {
        font-size: 18px;
      }
    }
    div:hover {
        color: #FFCE02;
        transition: ease 0.2s;
    }
`

export { CardContainer, CardBody, CardFooter }