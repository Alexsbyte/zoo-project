import React from 'react'
import { Link, NavLink } from "react-router-dom";

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
                to="/updateTariffs" 
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
      <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/zoo-concept-illustration_114360-6577.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <h1 className="title" style={{ fontSize: "3rem", margin: "20px 0", color: "orange" }}>
        Доступ запрещен!
      </h1>
      <p className="subtitle" style={{ fontSize: "1.5rem", margin: "20px 0" }}>
        У вас нет прав доступа к этой странице.
      </p>
      <div style={{ margin: "20px 0" }}>
        <NavLink to="/" className="button is-warning" style={{ margin: "10px" }}>
          На главную
        </NavLink>
      </div>
    </div>
    )}
    </>
    
  )
}
