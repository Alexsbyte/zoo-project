import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      className="hero is-fullheight has-text-centered"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/zoo-concept-illustration_114360-6577.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="hero-body">
        <div className="container">
          <h1 className="title" style={{ fontSize: "5rem", color: "red"}}>
            404
          </h1>
          <h2 className="title" style={{ fontSize: "2rem", color: "black", marginBottom: "4rem"}}>
            Здесь только Бобэр, курва!
          </h2>
          <div className="buttons is-centered">
            <NavLink to="/" className="button is-warning">
              На главную
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
