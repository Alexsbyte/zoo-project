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
                backgroundImage: `url('https://images.wallpaperscraft.com/image/single/beaver_tail_waving_76276_1280x720.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "15rem",
                  marginBottom: "20px",
                  color: "orange",
                  marginRight: "20%",
                }}
              >
                404
              </h1>
              <h1
                className="title"
                style={{
                  fontSize: "3rem",
                  marginBottom: "20px",
                  color: "orange",
                  marginRight: "20%",
                }}
              >
                Здесь только Бобэр, курва!
              </h1>
              <p
                className="subtitle"
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "20px",
                  color: "orange",
                  marginRight: "20%",
                }}
              >
                У вас нет прав доступа к этой странице.
              </p>
              <NavLink
                to="/"
                className="button is-warning"
                style={{ marginTop: "20px", marginRight: "20%" }}
              >
                На главную
              </NavLink>
            </div>
          )}
    </>
    
  )
}
