import React from 'react'
import LoginForm from '../../widgets/LoginForm/LoginForm'

export default function LoginPage({ setUser }) {
  return(
      <section 
      className="hero is-fullheight has-background"
      style={{ backgroundImage: "url('https://klike.net/uploads/posts/2020-02/1581927681_2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hero-body is-flex is-justify-content-center is-align-items-center">
        <div className="box has-text-centered " style={{ maxWidth: '400px', width: '100%' }}>
          <h1 className="title" aria-label="Форма входа">Вход</h1>
          <LoginForm setUser={setUser} />
        </div>
      </div>
    </section>
    )
}
