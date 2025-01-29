import React from 'react'
import RegForm from '../../widgets/RegForm/RegForm'

export default function RegPage() {
  return (
    <div className="section is-flex is-justify-content-center is-align-items-center" style={{ height: '100vh' }}>
      <div className="box has-text-centered">
        <div className="title">Форма Регистрации</div>
        <RegForm />
      </div>
    </div>
  )
}
