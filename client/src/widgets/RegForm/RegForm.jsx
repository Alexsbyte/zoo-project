import React from 'react'

export default function RegForm() {
  return (
    <form>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Введите имя пользователя" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="email" placeholder="Введите email" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="password" placeholder="Введите пароль" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="password" placeholder="Подтвердите пароль" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Зарегистрироваться</button>
            </div>
          </div>
        </form>
  )
}
