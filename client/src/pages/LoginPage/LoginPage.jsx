import React from 'react'
import LoginForm from '../../widgets/LoginForm/LoginForm'

export default function LoginPage({ setUser }) {
  return(
      <div className="section is-flex is-justify-content-center is-align-items-center" style={{ height: '100vh' }}>
        <div className="box has-text-centered">
          <div className="title">Вход</div>
          <LoginForm setUser={setUser} />
        </div>
      </div>
    )
}
