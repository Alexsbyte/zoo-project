import { useState , useEffect} from 'react'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegPage from './pages/RegPage/RegPage'
import LoginPage from './pages/LoginPage/LoginPage'
import 'bulma/css/bulma.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import AdminPage from './pages/AdminPage/AdminPage'



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
      },
      {
        path: '/animals',
        element: <AnimalsPage />
      },
      {
        path: '/admin',
        element: <AdminPage />
      }
    ]
  }
])


function App() {

  return <RouterProvider router={router}/>
}

export default App
