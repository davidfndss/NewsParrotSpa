import { Outlet, useNavigate, Link } from "react-router-dom"
import logo from "/img/parrot.png"
import { Header, InputSearchArea, LogoImageDiv, LogoImage, LogoText, UserInfoNav, ErrorSpan } from "./NavbarStyled.jsx"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { searchSchema } from "../../schemas/searchSchema.js"
import { Button } from "../../components/Button/Button.jsx"
import { Img } from "../../components/Img/Img.jsx"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../Context/UserContext.jsx"
import { getLoggedUserInfoService } from "../../services/getLoggedUserInfoService.js"


function Navbar() {
  const [ loading, setLoading ] = useState(true)
  const { loggedUserInfo, setLoggedUserInfo } = useContext(UserContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(searchSchema)
  });
  const navigate = useNavigate()
  
  function onSearch(data) {
    const { title } = data 
    navigate(`/search/${title}`)
    reset()
  }

  const getLoggedUserInfo = async () => {
    try {
      const res = await getLoggedUserInfoService()
      if (res) {
        setLoggedUserInfo(res)
      }
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect( () => {
    getLoggedUserInfo()

  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    )
    
  } else {
    return (
       <> 
         <Header>
            <LogoImageDiv>
              <Link to="/">
               <LogoImage src={ logo } alt="Logo news" />
               <LogoText>News Parrot</LogoText>
              </Link>
            </LogoImageDiv>

            <form onSubmit={handleSubmit(onSearch)}>
              <InputSearchArea>
                <input {...register("title")} type="text" />  
                <button>
                  <i className="bi bi-search"></i>
                </button>
              </InputSearchArea>
            </form>
            
            { 
              loggedUserInfo.username 
              ? 
                <UserInfoNav>
                  <Link to={`/profile/${loggedUserInfo.username}`}>
                    <span>{loggedUserInfo.username}</span>
                    <Img src={loggedUserInfo.avatar}></Img>
                  </Link>
                  <i className="bi bi-box-arrow-right" onClick={() => navigate("/logout")} id="logoutBtn"></i> 
                </UserInfoNav> 
              : <Link to="/signin">
                  <Button text="Entrar" type="button"></Button>
                </Link>
            }
         </Header>
         { errors.title ? <ErrorSpan>{errors.title.message}</ErrorSpan> : null}
         <Outlet />
       </>   
    )
  }
}

export { Navbar }