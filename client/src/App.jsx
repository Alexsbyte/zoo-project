import { useState , useEffect} from 'react'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegPage from './pages/RegPage/RegPage'
import LoginPage from './pages/LoginPage/LoginPage'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '/auth/reg',
        element: <RegPage  />
      }
      ,
      {
        path: '/auth/login',
        element: <LoginPage />
      }
    ]
  }
])


function App() {


    useEffect(() => {
      M.AutoInit(); 
    }, [])
  

  return <RouterProvider router={router}/>
}

export default App
