import styled from "styled-components"

const CommentStyled = styled.div`
  min-height: 4rem;
  height: 100%;
  width: 100%;
  max-width: 90vw;
  display: flex;
  padding: .5rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  h4 {
    font-size: 14px;
  }

  div {
    width: 100%;
    height: 100%;
    margin-left: 10px;

    p {
      margin-top: 7px;
      width: 100%;
      height: 100%;
      word-break: break-word;
    }

    span {
      color: gray;
    }
  }

  button.deleteCommentBtn {
    border: red solid 2px;
    width: 55px;
    height: 45px;
    cursor: pointer;
    font-size: 20px;
    border-radius: 50%;
    color: white;
    background-color: red;
  }

  @media (max-width: 480px) {
    button.deleteCommentBtn {
      min-width: 40px;
      height: 40px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    h4 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`

export { CommentStyled }