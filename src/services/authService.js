import Cookies from "js-cookie"

const authService = () => {
  const token = Cookies.get("token")
  const id = Cookies.get("id")
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return {
    token,
    id,
    headers
  }
}

export { authService }