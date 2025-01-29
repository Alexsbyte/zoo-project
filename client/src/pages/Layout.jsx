import React from 'react'
import Nav from '../shared/ui/Nav'
import Footer from '../shared/ui/Footer'
import {Outlet} from 'react-router-dom'

export default function Layout({user}) {
  return (
   <>
   <Nav user={user} />
   <Outlet />
   <Footer />
   </>
  )
}