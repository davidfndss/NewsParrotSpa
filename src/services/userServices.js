import axios from "axios"
import { authService } from "./authService.js"
import { useContext } from "react"
import { LoadingContext } from "../Context/LoadingContext.jsx"

const baseUrl = "https://newsparrotapi.onrender.com"

function signUpUser(data) {
  delete data.confirmPassword
  const body = {...data, name: data.username, avatar: "https://static-00.iconduck.com/assets.00/profile-circle-icon-1023x1024-ucnnjrj1.png", background: "https://img.freepik.com/premium-vector/realistic-minimalist-lines-future-white-gradient-modern-abstract-background-wallpaper-halftone_473751-745.jpg?w=1060"}
  const response = axios.post(`${baseUrl}/user/signup`, body)
  return response
}

function checkUsernameService(username){
  const response = axios.post(`${baseUrl}/user/check-username`, { username: username })
  return response
}

async function getLoggedUserInfo() {
    const [ loading, setLoading ] = useContext(LoadingContext)
   const token = Cookies.get("token")
   const id = Cookies.get("id")

  if(token && id) {
    setLoading(true)
    try {
      const response = await getLoggedUserInfoService()
      setLoggedUserInfo({
        id: response.data._id,
        username: response.data.username,
        avatar: response.data.avatar
      })
    } catch (err) {
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  } 

}

function checkEmailService(email){
  const response = axios.post(`${baseUrl}/user/check-email`, { email: email })
  return response
}

function signInUser(data) {
  const body = data
  const response = axios.post(`${baseUrl}/login`, body)
  return response
}

function findByUsername(username){
  const { headers } = authService()
  const user = axios.get(`${baseUrl}/user/find-by-username/${username}`, headers)
  return user
}

function updateUserService(data, id) {
  const { token } = authService()
  const response = fetch(`${baseUrl}/user/${id}/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  return response
}

export { signUpUser, checkUsernameService, checkEmailService, signInUser, getLoggedUserInfo, findByUsername, updateUserService }