import { findByUsername } from "../../../services/userServices.js"
import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom" 
import { ProfileHeader, ProfileBody } from "./ViewProfileStyled.jsx"
import { LoadingSection } from "../../../components/LoadingSection/LoadingSection.jsx"
import { searchNewsByUser } from "../../../services/newsServices.js"
import { Card } from "../../../components/Cards/Card.jsx"
import { Img } from "../../../components/Img/Img.jsx"
import { Dropdown } from "../../../components/Dropdown/Dropdown.jsx"
// import { UpdateNewsBtn } from "../../News/ReadNews/ReadNewsStyled.jsx"
import { UserContext } from "../../../Context/UserContext.jsx"
import { ErrorComponent } from "../../../components/Error/Error.jsx"
import Swal from 'sweetalert2'


function Profile() {
  const { username } = useParams()
  const [ user, setUser ] = useState({})
  const [ newsList, setNewsList ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate()
  const { loggedUserInfo } = useContext(UserContext)

  
  if (!loading && !loggedUserInfo.username) {
    return null
  }
  
  useEffect(() => {
    setLoading(true)
    const findUser = async () => {
      try {
        const user = await findByUsername(username)
        setUser(user.data || {})
        if(user){
          const id = String(user.data.id)
          const newsResponse = await searchNewsByUser(id)
          setNewsList(newsResponse.data.results)
        }  
      } catch (err) {
        Swal.fire({
          title: err.response.data.message,
          icon: "error"
        });
        setUser({})
      } finally {
        setLoading(false)
      }
    }
    findUser()
  }, [])


  const updateProfile = () => {
    navigate(`/profile/${username}/update`)
  }

  if (!loading && !user.name) {
    return <ErrorComponent text={`usuário ${username} não encontrado`} />
  }
  
  if (loading) {
    return <LoadingSection />
  } else {
    return (
      <>
        <ProfileHeader>
          <div id="avatarArea">
            <Img id="avatar" src={user.avatar}></Img>
          </div>
          <section id="cardContainer">
            <Img id="banner" src={user.background}></Img>
            <div id="cardFooter">
              <h2>{user.name}</h2>
              <h2 id="at">@{user.username}</h2>
            </div>
          </section>
        </ProfileHeader>
        
        <ProfileBody> 
          <Dropdown updateBtnEvent={updateProfile} logoutBtnOn="true"/>
          { 
            newsList.map((item) => {
            return <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
            })
          }
        </ProfileBody> 
      </> 
    )
  }
}

export { Profile }