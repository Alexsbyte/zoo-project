import { useEffect, useState } from "react"
import { setAccessToken } from '../../shared/lib/axiosInstance'
import apiUser from "../../entities/apiUser"
import { useNavigate } from "react-router-dom"

export default function RegForm( { setUser }) {

  const [formData, setFormData] = useState({username: '', email: '', password: '', confPass: ''})
  const [isDisabled, setDisabled] = useState(true)

  const navigete = useNavigate()
  useEffect(() => {
    const {username, email, password, confPass} = formData
    if(username !== '' &&
      email !== '' &&
      password !== '' && 
      confPass !== '' && 
      formData.password === formData.confPass) {
      setDisabled(false)
    }
  }, [formData])


  async function regHandler(e) {
    e.preventDefault()
    const {username, email, password} = formData
    const { data } = await apiUser.reg({ username, email, password })
    console.log('REGFORM', data);
    setAccessToken(data.data.accessToken)
    setUser(data.data.user)
    navigete('/')
  }

  return (
    <form onSubmit={regHandler}> 
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