import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({user}) {
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
              <NavLink to="/auth/reg" className="button is-primary">
                <strong>Регистрация</strong>
              </NavLink>
              <NavLink to="/auth/login" className="button is-info">
                Вход
              </NavLink>
              
              {user.username && 
                <button className="button is-danger">
                  <strong>Logout</strong>
                </button>
              }
              {user.username && 
                <button className="button is-light">
                  {user.username}
                </button> 
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}