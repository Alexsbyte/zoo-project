import { useState } from 'react'
import Layout from './pages/Layout'
import MainPage from './pages/MainPage/MainPage'
import RegPage from './pages/RegPage/RegPage'
import LoginPage from './pages/LoginPage/LoginPage'
import 'bulma/css/bulma.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AnimalsPage from './pages/AnimalsPage/AnimalsPage'
import AdminPage from './pages/AdminPage/AdminPage'


function App() {
  const [user, setUser] = useState({})

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user}/>,
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
          element: <LoginPage />
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