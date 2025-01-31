
import { useState, useEffect } from 'react'

import Layout from './pages/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegPage from './pages/RegPage/RegPage'
import LoginPage from './pages/LoginPage/LoginPage'
import TariffsPage from "./pages/TariffsPage/TariffsPage";
import 'bulma/css/bulma.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimalsPage from '../src/pages/AnimalsPage/AnimalsPage'
import apiUser from './entities/apiUser'
import { setAccessToken } from './shared/lib/axiosInstance'
import AdminPage from './pages/AdminPage/AdminPage'
import AnimalEditPage from './pages/AnimalEditPage/AnimalEditPage'
import apiAnimal from './entities/apiAnimal'
import TaxesUpdatePage from './pages/TaxesUpdatePage/TaxesUpdatePage'
import NotFound from './pages/NotFound/NotFound'




function App() {
  const [user, setUser] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [animals , setAnimals] = useState([])
  const [onAdd, setAdd] = useState(false)

   useEffect(()=>{
        getAnimalsAndPhoto()
      },[toggle, onAdd])
    
  const getAnimalsAndPhoto = async ()=> {
    const {data} = await apiAnimal.getAnimalsAndPhotos()
    const animalsArr =  await data.data.map(el => ({id:el.id, title:el.title, description: el.description, photos:el.Photos}))
    setAnimals(animalsArr) 
    // console.log(animalsArr);
    
  }


  async function handlerRefresh() {
      try {
        const token = document.cookie.split('=')[1]
        // console.log(token)
        if (token) {
          const {data} = await apiUser.refreshTokens()
          setAccessToken(data.accessToken)
          setUser(data.user)
        }
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
          element: <MainPage setToggle={setToggle} />

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
          path: '/animals',
          element: <AnimalsPage animals={animals}/>
        },
        {
          path: '/edit/animals',
          element: <AnimalEditPage animals={animals}  setAnimals={setAnimals} setAdd={setAdd}/>
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
        },]}

  ]);


  return <RouterProvider router={router}/>
}

export default App
