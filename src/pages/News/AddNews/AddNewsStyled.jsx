import styled from "styled-components"

const Section = styled.section`
  width: 400px;
  height: 80vh;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;

  h2 {
    text-align: center;
    margin-bottom: 10px;
    margin-top: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  label {
    width: 100%;
  }

  input, textarea {
    background-color: #E0E0E0;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    margin-top: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  span {
    color: red;
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    width: 90%;
  }
`

export { Section }