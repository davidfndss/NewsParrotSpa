import { createContext, useState } from "react"

const UserContext = createContext()

const UserProvider = ({children}) => {
  const [ loggedUserInfo, setLoggedUserInfo ] = useState({})

  return (
    <UserContext.Provider value={{ loggedUserInfo, setLoggedUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }