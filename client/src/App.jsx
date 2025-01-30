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
import TaxesUpdatePage from './pages/TaxesUpdatePage/TaxesUpdatePage'


function App() {
  const [user, setUser] = useState({})

  async function handlerRefresh() {
      const {data} = await apiUser.refreshTokens()
      console.log(data);
      
      setAccessToken(data.accessToken)
      setUser(data.user)
    }
  
    useEffect(() => {
      handlerRefresh()
    }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/auth/reg",
          element: <RegPage setUser={setUser} />,
        },
        {
          path: "/auth/login",
          element: <LoginPage setUser={setUser} />,
        },
        {
          path: "/admin",
          element: <AdminPage user={user} />,
        },
        {
          path: "/taxes",
          element: <TariffsPage />,
        },
        {
          path: "/updateTariffs",
          element: <TaxesUpdatePage user={user} />,
        },
        {
          path: "/animals",
          element: <AnimalsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}/>
}

export default App
