import { useState , useEffect } from 'react'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegPage from './pages/RegPage/RegPage'
import LoginPage from './pages/LoginPage/LoginPage'
import TariffsPage from "./pages/TariffsPage/TariffsPage";
import 'bulma/css/bulma.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import AdminPage from './pages/AdminPage/AdminPage'
import AnimalEditPage from './pages/AnimalEditPage/AnimalEditPage'
import apiAnimal from './entities/apiAnimal'


function App() {
  const [user, setUser] = useState({})
  const [toggle, setToggle] = useState(false)
  const [animals , setAnimals] = useState([])

   useEffect(()=>{
        getAnimalsAndPhoto()
    
      },[toggle])
        
  const getAnimalsAndPhoto = async ()=> {
    const {data} = await apiAnimal.getAnimalsAndPhotos()
    const animalsArr =  await data.data.map(el => ({id:el.id, title:el.title, description: el.description, photos:el.Photos}))
    setAnimals(animalsArr) 
    console.log(animalsArr);
    
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} setUser={setUser}/>,
      children: [
        {
          path: '/',
          element: <MainPage setToggle={setToggle} />
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
        path: "/tariffs",
        element: <TariffsPage />,
      },
        {
          path: '/animals',
          element: <AnimalsPage animals={animals}/>
        },
        {
          path: '/edit/animals',
          element: <AnimalEditPage animals={animals} />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
