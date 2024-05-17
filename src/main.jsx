import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { GlobalStyled } from "./GlobalStyled.jsx"
import { Navbar } from "./components/Navbar/Navbar.jsx"
import { Home } from "./pages/Home/Home.jsx"
import { Search } from "./pages/Search/Search.jsx"
import { SignIn } from "./pages/Authentication/SignIn.jsx"
import { SignUp } from "./pages/Authentication/SignUp.jsx"
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx"
import { Profile } from "./pages/Profile/ViewProfile/ViewProfile.jsx"
import { News } from "./pages/News/ReadNews/ReadNews.jsx"
import { AddNews } from "./pages/News/AddNews/AddNews.jsx"
import { UpdateNews } from "./pages/News/UpdateNews/UpdateNews.jsx"
import { DeleteNews } from "./pages/News/DeleteNews/DeleteNews.jsx"
import { UserProvider } from "./Context/UserContext.jsx"
import { UpdateProfile } from "./pages/Profile/UpdateProfile/UpdateProfile.jsx"
import { Logout } from "./pages/Logout/Logout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/", 
        element: <Home />
      },
      {
        path:"/search/:title",
        element: <Search />
      },
    ]
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/profile",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/profile/:username",
        element: <Profile />,
      },
      {
        path:"/profile/:username/update",
        element: <UpdateProfile />
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/news",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/news/:id",
        element: <News />
      },
      {
        path:"/news/add",
        element: <AddNews />
      },
      {
        path:"/news/update/:id",
        element: <UpdateNews />
      },
      {
        path:"/news/delete/:id",
        element: <DeleteNews />
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyled />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </>
)