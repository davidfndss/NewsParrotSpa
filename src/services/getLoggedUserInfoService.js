import axios from "axios"
import { authService } from "./authService.js"
import Cookies from "js-cookie"

const baseUrl = "https://newsparrotapi.onrender.com"

function getLoggedUserInfoService() {
   const token = Cookies.get("token")
   const id = Cookies.get("id")

  if(token && id) {
    const { id, headers } = authService()
    return axios.get(`${baseUrl}/user/find-by-id/${id}`, headers).then((result) => {
      return {
        id: result.data._id,
        username: result.data.username,
        avatar: result.data.avatar
       }
    }).catch((err) => {
      return {message: err.message}
    })
  }
  
}

export { getLoggedUserInfoService }