import { CardContainer, CardBody, CardFooter } from "./CardStyled.jsx"
import { Img } from "../Img/Img.jsx"
import { TextLimit } from "../TextLimit/TextLimit.jsx"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../Context/UserContext.jsx"
import { useContext } from "react"

function Card( props ){
   const { loggedUserInfo } = useContext(UserContext)
  
  const navigate = useNavigate()
  const readNews = () => {
    navigate(`/news/${props.id}`)
  }


  function goAuth() {
    navigate("/signin")
  }
  
  return (
    <CardContainer onClick={ loggedUserInfo.username ? readNews : goAuth } $top={ props.top }>
      <div className="bannerArea">
        <Img src={ props.banner } alt="Imagem referente a notícia" />
      </div>
      
      <CardBody $top={ props.top }>
          <TextLimit text={ props.text} limit={120} isTitle={true} />
          <TextLimit text={ props.text} limit={120} />

        {
          props.likes && props.comments &&  
          <CardFooter>
            <div>
              <i className="bi bi-heart"></i>
              <span>{ props.likes?.length }</span>
            </div>

            <div>
              <i className="bi bi-chat"></i>
              <span>{ props.comments?.length }</span>
            </div>
          </CardFooter>
        }
        {
          props.showGoBtn &&  <button><i className="bi bi-arrow-right-short"></i></button>
        }
        </CardBody>
      
    </CardContainer>
  )
}

export { Card }