import { useState, useEffect } from 'react'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegPage from './pages/RegPage/RegPage'
import LoginPage from './pages/LoginPage/LoginPage'
import TariffsPage from "./pages/TariffsPage/TariffsPage";
import 'bulma/css/bulma.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import apiUser from './entities/apiUser'
import { setAccessToken } from './shared/lib/axiosInstance'
import AdminPage from './pages/AdminPage/AdminPage'
import NotFound from './pages/NotFound/NotFound'


function App() {
  const [user, setUser] = useState({})
  const [isLoaded, setLoaded] = useState(false)

  async function handlerRefresh() {
      try {
        const {data} = await apiUser.refreshTokens()
        setAccessToken(data.accessToken)
        setUser(data.user)
        setLoaded(true)
      } catch (error) {
        setLoaded(true)
      }
    }
  
    useEffect(() => {
      handlerRefresh()
    }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} setUser={setUser} isLoaded={isLoaded}/>,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <MainPage />
        },
        {
          path: '/auth/reg',
          element: <RegPage setUser={setUser}  />
        }
        ,
        {
          path: '/auth/login',
          element: <LoginPage setUser={setUser} />
        },
        {
          path: '/admin',
          element: <AdminPage user={user} />
        },
         {
        path: "/tariffs",
        element: <TariffsPage />,
      },
        {
          path: '/animals',
          element: <AnimalsPage />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
