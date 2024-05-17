import styled from "styled-components"

const Main = styled.main`
  padding: 1rem;
  margin: auto;
  margin-top: 15px;
  width: 95%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  img#banner{
    border-radius: 10px;
  }

  button#updateNewsBtn:hover, button#deleteNewsBtn:hover {
    background-color: black;
    transition: 0.4s ease;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
    }
    
    p {
      font-size: 16px;
    }
  }
`

const AuthorInfo = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #e5e5e5;
  width: 100%;

  div{
    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
      display: block;
    }
  }

  img{
    width: 100px;
    height: 100px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    img {
      width: 70px;
      height: 70px;
    }
    div {
      span {
        font-size: 14px;
      }
    }
  }
`

const NewsInfo = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 100%;
  flex-direction: column;
  color: gray;
  margin-left: 15px;

  button {
    border: none;
    width: 80px;
    height: 30px;
    font-size: 22px;
  }

  span#likes{
    color: #FFCE02;
    cursor: pointer;
    font-size: 25px;
  }

  span#likes:hover{
    color: #FFE167;
    transition: 0.2s ease;
  }
  
  @media (max-width: 480px) {
    margin-left: 0px;
    padding: 10px;
    span {
      font-size: 14px;
    }
    span#likes{
      font-size: 20px;
    }
  }
`

const NewsFooter = styled.footer`
  display: flex;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const CommentsSection = styled.section`
  span#numberOfComments {
    text-align: center;
    display: block;
    font-weight: bold;
  }
  @media (max-width: 480px) {
    span#numberOfComments {
      font-size: 14px;
    }
  }
`

const AddCommentArticle = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  padding: .5rem;

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
  }

  form {
     width: 100%;
     display: flex;
     align-items: center;
     margin-left: 10px;
  }

  input {
    width: 90%;
    border-radius: 5px 0px 0px 5px;
    border: none;
    height: 2.5rem;
    padding: 1rem;
  }

  button {
    width: 10%;
    border: none;
    height: 2.5rem;
    padding: 1 rem;
    border-radius: 0px 5px 5px 0px;
    background-color: #FFCE02;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  button:hover {
    background-color: black;
    transition: 0.4s ease;
  }

  @media (max-width: 480px) {
    img {
      height: 50px;
      width: 50px;
    }
    
    button {
      width: 50px;
    }
  }
`


export { Main, AuthorInfo, NewsInfo, NewsFooter, CommentsSection, AddCommentArticle }