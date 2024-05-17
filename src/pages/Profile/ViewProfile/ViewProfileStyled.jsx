import styled from "styled-components"

const ProfileHeader = styled.header`
  width: 95vw;
  max-width: 1200px;
  margin: auto;
  margin-top: 10px;
  height: 300px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  
  img#banner {
    width: 100%;
    max-width: 95vw;
    height: 50%;
    object-fit: cover;
    object-position: center;
  }
  
  img#avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid white;
    background-color: white;
    margin-left: 30px;
  }

  div#avatarArea{
    height: 300px;
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;
  }
  
  section#cardContainer{
    display: flex;
    flex-direction: column;
    height: 300px;
    position: absolute;
    width: 95vw;
    max-width: 1200px;
    z-index: -1;
    border-radius: 10px;
    overflow: hidden;
  }
  
  div#cardFooter{
    background-color: white;
    height: 150px;
    z-index: 1;
    display: flex;
    align-items: center;
    padding-left: 2vw;
    gap: 4px;
    padding: 15px;

    h2#at {
      color: gray;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }
    img#avatar {
      margin-left: 15px;
    }
  }
`

const ProfileBody = styled.main`
  height: 100%;
  width: 95vw;
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 49.7%);
  grid-gap: .5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 100%);
  }
` 

export { ProfileHeader, ProfileBody }