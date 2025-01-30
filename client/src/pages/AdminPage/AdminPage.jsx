import React from 'react'
import { Link } from "react-router-dom";

export default function AdminPage({ user }) {
  return (
    <>
      {(user.roleId === 1) ? (
      <div className="hero is-flex is-justify-content-center is-align-items-center">
        <div className="box" style={{ backgroundColor: '#f0f0f0', padding: '70px', borderRadius: '30px' }}>
          <div className="columns is-centered">
            <div className="column ">
              <Link 
                to="/edit-animals" 
                className="button is-warning is-large is-fullwidth is-size-4 has-text-centered has-text-white"
                style={{ whiteSpace: 'nowrap' }}
              >
                Редактировать животных
              </Link>
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column ">
              <Link 
                to="/edit-tariffs" 
                className="button is-primary is-large is-fullwidth is-size-4 has-text-centered has-text-white"
                style={{ whiteSpace: 'nowrap' }}
              >
                Редактировать тарифы
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>Доступ запрещен</div>
    )}
    </>
    
  )
}
