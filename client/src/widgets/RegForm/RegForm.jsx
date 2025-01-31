import { useEffect, useState } from "react"
import { setAccessToken } from '../../shared/lib/axiosInstance'
import apiUser from "../../entities/apiUser"
import { useNavigate } from "react-router-dom"

export default function RegForm( { setUser }) {

  const [formData, setFormData] = useState({username: '', email: '', password: '', confPass: ''})
  const [isDisabled, setDisabled] = useState(true)
  const [error, setError] = useState(null);

  const navigete = useNavigate()
  useEffect(() => {
    const { username, email, password, confPass } = formData;

    if (
      username.trim() &&
      email.trim() &&
      password.trim() &&
      password.trim().length >=8 &&
      confPass.trim() &&
      password === confPass
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData]);

  async function regHandler(e) {
    e.preventDefault()
    try {
      const {username, email, password} = formData
      const { data } = await apiUser.reg({ username, email, password })
      setAccessToken(data.accessToken)
      setUser(data.user)
      navigete('/')
    } catch (error) {
      setAccessToken('')
      setUser({})
      const { message } = error.response.data
      setError(message || 'An error occurred during login')
      setTimeout(() => {
        setError(null)
      }, 4000)
    }
  }

  return (
    <form onSubmit={regHandler} noValidate> 
      {error && <div className="notification is-danger" style={{ maxWidth: "333px"}}>{error}</div>}  
          <div className="field">
            <div className="control">
              <input 
              className="input"  
              onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})} 
              name="username"
              value={formData.username} 
              type="text" 
              placeholder="Введите имя пользователя" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input 
              className="input"  
              onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})} 
              name="email" 
              value={formData.email} 
              type="email" 
              placeholder="Введите email" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input 
              className="input" 
              onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})} 
              name="password" 
              value={formData.password} 
              type="password" 
              placeholder="Введите пароль" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input 
              className="input" 
              onChange={(e)=>setFormData({...formData, [e.target.name]: e.target.value})} 
              name="confPass"
              value={formData.confPass}  
              type="password" 
              placeholder="Подтвердите пароль" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button 
              type='submit' 
              className="button is-primary" 
              disabled={isDisabled}
            >Зарегистрироваться</button>
            </div>
          </div>
        </form>
  )
}