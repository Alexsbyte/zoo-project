import React from 'react'
import RegForm from '../../widgets/RegForm/RegForm'

export default function RegPage({ setUser }) {
  return (
    <section 
      className="hero is-fullheight has-background"
      style={{ backgroundImage: "url('https://coop-land.ru/uploads/posts/2021-06/1623216113_planet-zoo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hero-body is-flex is-justify-content-center is-align-items-center">
        <div className="box has-text-centered" style={{ maxWidth: '400px', width: '100%' }}>
          <h1 className="title" aria-label="Форма входа">Создать учетную запись</h1>
          <RegForm setUser={setUser} />
        </div>
      </div>
    </section>
  )
}
