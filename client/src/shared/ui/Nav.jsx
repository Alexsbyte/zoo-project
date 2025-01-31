import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import apiUser from '../../entities/apiUser'
import { setAccessToken } from '../lib/axiosInstance'

export default function Nav({user, setUser, isLoaded}) {

  const navigate = useNavigate()
  
  async function handleLogout(e) {
    e.preventDefault()
    const {data} = await apiUser.logout()
    setAccessToken('')
    setUser({})
    navigate('/')
  }
  

  if (!isLoaded) {
    return (
      <nav className="navbar" style={{ height: "64px"}}>
        <div className="navbar-brand">
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
        
        <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="#75FB4C"><path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/></svg>
        
          <span className='is-size-3'>Zooryupinsk</span>
        </NavLink>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarDropdown">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarDropdown" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">

              {(!user?.username) && <>
                <NavLink to="/auth/reg" className="button is-primary">
                  <strong>Регистрация</strong>
                </NavLink>
                <NavLink to="/auth/login" className="button is-info">
                  Вход
                </NavLink>
              </>}
              
              {user?.username && 
                <>
                  
                  <span>Привет, {user.username}</span>
                    {user?.roleId === 1 ? (
                      <NavLink to="/admin" className="button is-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M690.88-270q25.88 0 44-19T753-333.88q0-25.88-18.12-44t-44-18.12Q665-396 646-377.88q-19 18.12-19 44T646-289q19 19 44.88 19Zm-1.38 125q33.5 0 60.5-14t46-40q-26-14-51.96-21t-54-7q-28.04 0-54.54 7T584-199q19 26 45.5 40t60 14ZM480-80q-138-32-229-156.5T160-522v-239l320-120 320 120v270q-14-7-30-12.5t-30-7.5v-208l-260-96-260 96v197q0 76 24.5 140T307-269.5q38 48.5 84 80.5t89 46q6 12 18 27t20 23q-9 5-19 7.5T480-80Zm212.5 0Q615-80 560-135.5T505-267q0-78.43 54.99-133.72Q614.98-456 693-456q77 0 132.5 55.28Q881-345.43 881-267q0 76-55.5 131.5T692.5-80ZM480-479Z"/></svg>
                    </NavLink>
                    ) : (
                      <NavLink to="/tariffs" className="button is-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#75FB4C"><path d="M480-283q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm0-167q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm340 457H140q-24.75 0-42.37-17.63Q80-195.25 80-220v-153q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-153q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v153q-37 7-61.5 37T794-480q0 40 24.5 69.5T880-373v153q0 24.75-17.62 42.37Q844.75-160 820-160Zm0-60v-109q-38-26-62-65t-24-86q0-47 24-86t62-65v-109H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329v109h680ZM480-480Z"/></svg>
                    </NavLink>
                    )}
                    
                    
                  
                  <button onClick={handleLogout} className="button is-danger">
                    <strong>Logout</strong>
                  </button>
                  
                </>
              }
            
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}